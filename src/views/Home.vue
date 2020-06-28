<template>
  <div id="home">
    <NavStud v-if="!mobileView" />
    <NavStudMob v-if="mobileView"  />

    <div align="right" style="margin-bottom:10px;">  
      <button @click="showFilter"> Filter </button> 
    </div>

    <div id="show-filter" align="right" style="display:none;position: relative;" v-if="!showPic">
      <div style="position: absolute; right:105px; top:-56.5px;">
        <button class="reset-all-button" @click="resetAll()" disabled  id="reset-all-btn" >Reset all</button>
      </div>  
          <table>
            <tr style="display:flex;align-items:baseline;">
              <td style="display:flex;align-items:baseline;">
                <form id="dateID"  >
                  <input type="date"  v-model="myDate"  class="dropdownMenu"  id= "dateInput" >   
                </form>
                <button class="reset-button" @click="resetDate" > X </button>
              </td>

              <td style="display:flex;align-items:baseline;">
              <form id="timeID" >
                <input type="time"  v-model="myTime" class="dropdownMenu" > 
              </form> 
              <button class="reset-button" @click="resetTime" > X </button> 
              </td>
              
              <td style="display:flex;align-items:baseline;">
                <form id="locationID">
                <input type="search" list="location"   placeholder="select location" v-model="myLocation" class="dropdownMenuSearch"   />
                  <datalist id="location" >
                    <option value="Stark Arena"></option>
                    <option value="Pionir hala"></option>
                    <option value="Tasmajdan"></option>
                    <option value="Sportski centar Olimp"> </option>
                  </datalist>
                </form>  
                <button class="reset-button" @click="resetLocation" > X </button>
              </td>
            </tr>
          </table>
    </div>

    <div id="show-filter" align="right" style="display:none;margin-bottom:20px;position: relative;" v-if="showPic">
      <div style="position: absolute; right:105px; top:-56.5px;">
        <button class="reset-all-button" @click="resetAll()" disabled  id="reset-all-btn" >Reset all</button>
      </div>
        <div style="display:flex;align-items:baseline;width:100%; justify-content:flex-end;" >
          <form id="dateID"  >
            <input type="date"  v-model="myDate"  class="dropdownMenu"  id= "dateInput" >   
          </form>
          <button class="reset-button" @click="resetDate" > X </button>
        </div>

        <div style="display:flex;align-items:baseline;width:100%;justify-content:flex-end;">
          <form id="timeID" >
            <input type="time"  v-model="myTime" class="dropdownMenu" > 
          </form> 
          <button class="reset-button" @click="resetTime" > X </button>
        </div>

        <div style="display:flex;align-items:baseline;width:100%;justify-content:flex-end;">
          <form id="locationID">
            <input type="search" list="location"   placeholder="select location" v-model="myLocation"  class="dropdownMenuSearch" />
            <datalist id="location" >
              <option value="Stark Arena"></option>
              <option value="Pionir hala"></option>
              <option value="Tasmajdan"></option>
              <option value="Sportski centar Olimp"> </option>
            </datalist>
          </form>  
          <button class="reset-button" @click="resetLocation" > X </button>
        </div>    
    </div>
    
    <GamesHeader v-if="!mobileView"/>
    <Games v-bind:games="games" />

  </div>
</template>

<script>
import NavStud from "../components/NavStud.vue";
import NavStudMob from "../components/NavStudMob.vue";
import GamesHeader from "../components/GamesHeader.vue";
import games from "../data/games.js";
import Games from "../components/Games.vue";


export default {
  name: "home",

  components: {
    NavStud,
    GamesHeader,
    Games,
    NavStudMob
  },

  data() {
    return {
      games: games,
      myDate: null,
      myTime: null,
      myLocation: null,
      isEditing: false,
      newDate: null,
      allGames: games,
      mobileView: false,
      showPic: false,
    };
  },

  beforeUpdate() {

    if(this.myDate != undefined) {
    this.newDate = this.myDate.split('-');
    this.newDate = this.newDate[2] + '.' + this.newDate[1] + '.' + this.newDate[0] + '.';
    }

    if(this.newDate == null && this.myTime == null && this.myLocation == null) { 
      this.games = this.allGames;
      document.getElementById("reset-all-btn").disabled = true;
      }

    else if(this.newDate != null) {
      document.getElementById("reset-all-btn").disabled = false;
      this.games = this.allGames.filter(game => game.date == this.newDate);
      if(this.myTime != null) { this.games = this.games.filter(game => game.time == this.myTime); }
      if(this.myLocation != null) { this.games = this.games.filter(game => game.location == this.myLocation); }
    }

    else if(this.myTime != null) {
      document.getElementById("reset-all-btn").disabled = false;
      this.games = this.allGames.filter(game => game.time == this.myTime);
      if(this.myLocation != null) { this.games = this.games.filter(game => game.location == this.myLocation); }
    }

    else if(this.myLocation != null) {
      document.getElementById("reset-all-btn").disabled = false;
      this.games = this.allGames.filter(game => game.location == this.myLocation);
    }
  },

  methods: {
    showFilter() {
      var x = document.getElementById("show-filter");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    resetAll() {
      document.getElementById("dateID").reset();
      document.getElementById("locationID").reset();
      document.getElementById("timeID").reset();
      this.myDate = null;
      this.myTime = null
      this.myLocation = null
      this.newDate = null
      this.games = this.allGames
    },

    resetDate() {
      document.getElementById("dateID").reset();
      this.myDate = null
      this.newDate = null
      
    },

    resetLocation() {
      document.getElementById("locationID").reset();
      this.myLocation = null
    },

    resetTime() {
      document.getElementById("timeID").reset();
      this.myTime = null
    },

    handlePic() { this.showPic = window.innerWidth <= 1024; },
    handleView() { this.mobileView = window.innerWidth <= 800; }
  },

  created() {
    this.handlePic();
    window.addEventListener('resize', this.handlePic);
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },

  updated() {
    this.handlePic();
    window.addEventListener('resize', this.handlePic);
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
};
</script>

<style scoped>
.dropdownMenu {
  background    : white;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 240px;
  height        : 37px;
  padding       : 0px 10px;
  font-size     : 14px;
  color         : #2c2c2c;
  margin        : 0px 0px 0px 10px;
  border        : 0px;
  border-radius : 4px;
}

.dropdownMenu:focus { outline: none;}

.dropdownMenuSearch {
  background      : white;
  filter          : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width           : 260px;
  height          : 37px;
  padding         : 0px 10px;
  font-size       : 14px;
  color           : #2c2c2c;
  margin          : 0px 0px 0px 10px;
  border          : 0px;
  border-radius   : 4px;

}

.dropdownMenuSearch:focus { outline: none;}

.reset-all-button{
  background    : #ed4144;
  font-family   : Roboto, sans-serif;
  width         : 100px;
  padding       : 10px 10px;
  font-size     : 14px;
  color         : white;
  margin        : 10px 5px 10px 5px;
  border        : 0px;
  border-radius : 4px;
 }

.reset-all-button:hover { filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.2));}
.reset-all-button:disabled { filter:none;}

.reset-button{
  background    : white;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  font-family   : Roboto, sans-serif;
  width         : 30px;
  padding       : 10px 10px ;
  font-size     : 14px;
  color         : #2c2c2c;
  margin        : 5px 5px 5px 5px;
  border        : 0px;
  border-radius : 4px;
 }

.reset-button:hover { filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.2));}

</style>

