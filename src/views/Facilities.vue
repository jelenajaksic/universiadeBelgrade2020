<template>
  <div id="facilities">
    <NavStud v-if="!mobileView" />
    <NavStudMob v-if="mobileView" />

    <hr style="height:3vw; visibility:hidden;" v-if="!mobileView"  />


    <div style="display:flex; justify-content: center;" v-if="!mobileView">

  
      <div class="mapouter"  >
        <GmapMap
          :center="{lat:44.8055, lng:20.4761}"
          :zoom="13"
          map-type-id="terrain"
          style="width: 50vw; height: 475px"
          :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
       }"
        >
      
          <gmap-custom-marker :key="index"
            v-for="(m, index) in markers"
            :marker="m" @click.native="click(index)" @mouseover.native="mouseover(index)" @mouseleave.native="mouseleave(index)">
            <div v-if="locations[index].name == currentUser.accomodation || locations[index].name == currentUser.restaurant">
            <font-awesome-icon :id="'icon-no'+index" v-if="locations[index].type === 'Restaurant'" icon="utensils" class="icon-map" style="background-color:#ed4144 ;" />
            <font-awesome-icon :id="'icon-no'+index" v-else icon="bed" class="icon-map" style="background-color: #ed4144 ;" />
            </div>
            <div v-else>
            <font-awesome-icon :id="'icon-no'+index" v-if="locations[index].type === 'Restaurant'" icon="utensils" class="icon-map" style="background-color:#2c2c2c;" />
            <font-awesome-icon :id="'icon-no'+index" v-else icon="bed" class="icon-map" style="background-color: #2c2c2c;" />
            </div>
          </gmap-custom-marker>

        </GmapMap>
      </div>


      <div style="overflow-y: scroll; max-height: 475px;width:40vw;" class="skrol">
        <Locations v-bind:locations="locations" v-on:set-id="click" />
      </div>
    </div>



    
    <div  v-if="mobileView" >

      <div class="mapouter_mob" >
        <GmapMap
          :center="{lat:44.8055, lng:20.4761}"
          :zoom="13"
          map-type-id="terrain"
          style="width: 100%; height:60vh;"
          :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
       }"
        >
      
          <gmap-custom-marker :key="index"
            v-for="(m, index) in markers"
            :marker="m" @click.native="click(index)" @mouseover.native="mouseover(index)" @mouseleave.native="mouseleave(index)">
            <div v-if="locations[index].name == currentUser.accomodation || locations[index].name == currentUser.restaurant">
            <font-awesome-icon :id="'icon-no'+index" v-if="locations[index].type === 'Restaurant'" icon="utensils" class="icon-map" style="background-color:#ed4144 ;" />
            <font-awesome-icon :id="'icon-no'+index" v-else icon="bed" class="icon-map" style="background-color: #ed4144 ;" />
            </div>
            <div v-else>
            <font-awesome-icon :id="'icon-no'+index" v-if="locations[index].type === 'Restaurant'" icon="utensils" class="icon-map" style="background-color:#2c2c2c;" />
            <font-awesome-icon :id="'icon-no'+index" v-else icon="bed" class="icon-map" style="background-color: #2c2c2c;" />
            </div>
          </gmap-custom-marker>

        </GmapMap>
      </div>

      <div style="overflow-y: hide; width:100%;margin-right: 0px; margin-left:0px;" >
        <Locations v-bind:locations="locations" v-on:set-id="click" />
      </div>
    </div>





    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal || showModalConfirm" @click="showModal = false;showModalConfirm=false" ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">

        <div v-if="!mobileView">
          <div style="align:center;color:#ed4144;font-size:20px;margin-bottom:40px;margin-top:10px;">
            {{ locations[openedID].name}}
          </div>
          <table>
              <tr>
                <td class="item1" align="left">
                  <font-awesome-icon icon="address-card"  style="margin-right:20px;margin-left:10px;height:auto;"/>
                  Address
                </td>
                <td rowspan="5" width="10px"></td>
                <td class="item2" align="left">{{ locations[openedID].address}}</td>
                <td rowspan="5" width="10px"></td>
              </tr>
              <tr colspan="2" height="10px"></tr>
              <tr>
                <td class="item1" align="left">
                  <font-awesome-icon icon="phone"  style="margin-right:20px;margin-left:10px;height:auto;"/>
                  Phone number</td>
                <td class="item2" align="left">{{ locations[openedID].phone }}</td>
              </tr>
              <tr colspan="2" height="10px"></tr>
              <tr>
                <td class="item1" align="left">
                  <font-awesome-icon icon="star"  style="margin-right:20px;margin-left:10px;height:auto;"/>
                  Current rating
                </td>
                <td class="item2" align="left">{{ locations[openedID].rating }}</td>
              </tr>
              <tr colspan="2" height="30px"></tr>
              <tr >
                
                <td class="rating-box"  align="center" colspan="3">
                  <p style="padding:10px 10px 10px 10px;margin:10px 10px 10px 10px;float:left;"> Rate this facility </p>
                  
                  <form class="rating" id="rating-form" @input="changeRating() ">
                    <label>
                      <input type="radio" name="stars" value="1" id="s1"/>
                      <span class="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" id="s2"/>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" id="s3"/>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>   
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" id="s4"/>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="5" id="s5" />
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                    </label>
                  </form>
                </td>
              </tr>
              <tr colspan="2" height="30px"></tr>
              <tr >
                <td colspan="3" class="comments" >
                  <div style="display:flex; color:#ed4144;margin-top:10px;margin-left:20px;margin-bottom:16px;">
                  <font-awesome-icon icon="comments" class="icon" style="margin-right:20px;font-size:20px;"/>
                  Comments
                  </div>
                  <div class="comm">
                  <Comments v-bind:comments="comments" />
                  </div>
                  <AddComment v-on:add-comment="leaveComment"/>

                </td>
              </tr>
              <tr colspan="2" height="30px" v-if="locations[openedID].name != currentUser.accomodation && locations[openedID].name != currentUser.restaurant"></tr>
              <tr v-if="locations[openedID].name != currentUser.accomodation && locations[openedID].name != currentUser.restaurant">
                <td colspan="3" class="comments" >
                  <div style="display:flex; color:#ed4144;margin-top:10px;margin-left:20px;margin-bottom:10px;">
                    <font-awesome-icon icon="location-arrow" class="icon" style="margin-right:20px;widht:20px;font-size:20px;"/>
                  Request a change
                  </div>
                
                    <div style="width:auto; margin-top:20px;margin-bottom:20px;">
                        <input type="text" id="msg" class="my-comment" v-model="myRequest" placeholder="leave a message...">
                    </div>
                    <button style="margin-bottom:10px;" @click="showModalConfirm=true;showModal=false">Request</button>
                
                </td>
              </tr>
            </table>
        </div>



        <div v-if="mobileView">
          <div style="align:center;color:#ed4144;font-size:18px;margin-bottom:20px;margin-top:10px;">
            {{ locations[openedID].name}}
          </div>
          <table>
            <tr class="item1_mob" align="center" >
              <font-awesome-icon icon="address-card"  style="margin-right:20px;margin-left:20px;widht:20px;height:auto;"/>
              Address
            </tr>
            <tr height="1vh"></tr>
            <tr  class="item2_mob" align="left"> {{ locations[openedID].address}}  </tr>
            <tr height="10vh"></tr>

            <tr class="item1_mob" align="center" >
              <font-awesome-icon icon="phone"  style="margin-right:20px;margin-left:20px;widht:20px;height:auto;"/>
              Phone number
            </tr>
            <tr height="1vh"></tr>
            <tr  class="item2_mob" align="left"> {{ locations[openedID].phone }} </tr>
            <tr height="10vh"></tr>

            <tr class="item1_mob" align="center" >
              <font-awesome-icon icon="star"  style="margin-right:20px;margin-left:20px;widht:20px;height:auto;"/>
              Current rating
            </tr>
            <tr height="1vh"></tr>
            <tr  class="item2_mob" align="left"> {{ locations[openedID].rating }} </tr>
            <tr height="10vh"></tr>

            <tr class="item1_mob" style="padding-left:20px;">
              Rate this facility
            </tr>
            <tr height="1vh"></tr>
                        
              <tr class="item2_mob">
                <td style="align:center;">
                  <form class="rating" id="rating-form" @input="changeRating() ">
                    <label>
                      <input type="radio" name="stars" value="1" id="s1"/>
                      <span class="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" id="s2"/>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" id="s3"/>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>   
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" id="s4"/>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="5" id="s5" />
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                      <span class="icon">★</span>
                    </label>
                  </form>
                </td>
                
              </tr>
              
              <tr height="10vh"></tr>

              <tr class="comments_mob">
                 <div style="display:flex; color:#ed4144;margin-top:20px;margin-left:20px;margin-bottom:16px;">
                  <font-awesome-icon icon="comments" class="icon" style="margin-right:20px;font-size:20px;"/>
                  Comments
                  </div>
                  <div class="comm">
                  <Comments v-bind:comments="comments" />
                  </div>
                  <AddComment v-on:add-comment="leaveComment"/>
              </tr>

              <tr height="10vh" v-if="locations[openedID].name != currentUser.accomodation && locations[openedID].name != currentUser.restaurant"></tr>
              <tr class="comments" v-if="locations[openedID].name != currentUser.accomodation && locations[openedID].name != currentUser.restaurant">
                
                  <div style="display:flex; color:#ed4144;margin-top:20px;margin-left:20px;margin-bottom:10px;">
                    <font-awesome-icon icon="location-arrow" class="icon" style="margin-right:20px;widht:20px;font-size:20px;"/>
                  Request a change
                  </div>

                    <div style="width:auto; margin-top:20px;margin-bottom:20px;">
                        <input type="text" id="msg" class="my-comment" v-model="myRequest" placeholder="leave a message...">
                    </div>
                    <button style="margin-bottom:10px;" @click="showModalConfirm=true;showModal=false">Request</button>
                
        
              </tr> 
            </table>
        </div>



        <hr style="height:20pt; visibility:hidden;" />
          <button class="button" @click="showModal = false">
            Done
          </button>
      </div>


      <div class="modal" v-if="showModalConfirm">
        <h1>Are you sure you want to send the request?</h1>
        <hr style="height:20pt; visibility:hidden;" />
        <button class="button" @click="showModalConfirm = false;this.myRequest='';" >
          Yes
        </button>
        <button class="button" @click="showModalConfirm = false; this.myRequest=''">
          No
        </button>
      </div>
    </transition>

  </div>
</template>

<script>
import NavStud from "../components/NavStud.vue";
import NavStudMob from "../components/NavStudMob.vue";
import Locations from "../components/Locations.vue";
import locations from "../data/locations.js";
import currentUser from "../data/currentUser.js";
import { gmapApi } from "vue2-google-maps";
import GmapCustomMarker from "vue2-gmap-custom-marker";
import comments from "../data/comments.js";
import Comments from "../components/Comments.vue";
import AddComment from "../components/AddComment.vue";

export default {
  name: "facilities",

  components: {
    NavStud,
    NavStudMob,
    Locations,
    "gmap-custom-marker": GmapCustomMarker,
    Comments,
    AddComment
  },

  computed: {
    google: gmapApi
  },

  data() {
    return {
      locations: locations,
      currentUser: currentUser,
      markers: [],
      openedID: null,
      comments:comments,
      showModal: false,
      showModalConfirm: false,
      myRequest: null,
      myRating: null,
      originalRating:'',
      ratingsList: [],
      mobileView: false,
    };
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
    
    var filtered = this.locations.filter(
      location =>
        location.name === currentUser.accomodation ||
        location.name === currentUser.restaurant
    );
    this.locations = this.locations.filter(
      location =>
        location.name != currentUser.accomodation &&
        location.name != currentUser.restaurant
    );
    this.locations = filtered.concat(this.locations);

    for(var i=0;i <= this.locations.length; i++) {
      this.markers = [...this.markers,this.locations[i].markers];
      this.ratingsList = [...this.ratingsList,this.locations[i].rating]
    };
  },

  updated() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },

  methods: {
    click(index) {
      this.openedID = index;
      this.showModal = true;

      this.originalRating = this.ratingsList[index]; 
    },

    changeRating() {
      if (document.getElementById('s1').checked) {
        this.myRating = 1;
      }
       else if (document.getElementById('s2').checked) {
        this.myRating = document.getElementById('s2').value;
      } 
      else if (document.getElementById('s3').checked) {
        this.myRating = document.getElementById('s3').value;
      } 
      else if (document.getElementById('s4').checked) {
        this.myRating = document.getElementById('s4').value;
      } 
      else if (document.getElementById('s5').checked) {
        this.myRating = document.getElementById('s5').value;
      }

     var num = (parseFloat(this.originalRating * this.locations[this.openedID].ratedNo) + parseFloat(this.myRating)) / (parseFloat(this.locations[this.openedID].ratedNo) + 1);
     this.locations[this.openedID].rating = num.toFixed(2)
  },

    leaveComment(myComment) {
     const newComment = {
       id : this.comments.length + 1,
       postID: this.openedID,
       body: myComment,
       liked: "0",
       disliked: "0"
     }
     this.comments = [...this.comments, newComment]
  
   },

   mouseover(index) {
    var i = 'icon-no'+index;
    if(this.locations[index].name == currentUser.accomodation || this.locations[index].name == currentUser.restaurant) {
       document.getElementById(i).style.backgroundColor = "white"
       document.getElementById(i).style.color = "#ed4144"
     }
    else {
      document.getElementById(i).style.backgroundColor = "white";
      document.getElementById(i).style.color = "#2c2c2c"
     }
   },

    mouseleave(index) {
     var i = 'icon-no'+index;
     if(this.locations[index].name == currentUser.accomodation || this.locations[index].name == currentUser.restaurant) {
       document.getElementById(i).style.backgroundColor = "#ed4144"
     }
     else {document.getElementById(i).style.backgroundColor = "#2c2c2c"}
     document.getElementById(i).style.color = "white"
    },

    handleView() {this.mobileView = window.innerWidth <= 800; },
    }
};
</script>


<style scoped>
::-webkit-scrollbar {
  width: 0px;  
  background: transparent; 
}

.indicator-msg {
  width:70px;
  height:20px;
  background-color: white;
  color:#2c2c2c;
  border: none;
  border-radius: 4px;
}

.icon-map {
  font-size:14px;
  color:white;
  border-radius:20px;
  padding: 7px;
  height: 20px;
  width:20px;
  border-radius: 50px;
  cursor: pointer;
}

.mapouter {
  margin-right: 30px;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: auto;
  margin-left:20px;
}

.mapouter_mob {
  margin-left:3vw;
  margin-right: 3vw;
  margin-top: 3vh;
  margin-bottom: 5vh;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: auto;
}

.skrol::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; 
}

.skrol::-webkit-scrollbar-thumb { background: #2c2c2c;}

.my-comment{
    background: white;
    font-family: Roboto, sans-serif;
    filter: none;
    width: 90%;
    max-width: 700px;
    height: auto;
    padding: 10px 10px;
    font-size: 14px;
    color: #2c2c2c;
    margin: none;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color:#aaa ;
    border-radius: 0px;
    text-align: left;
}

.comm {
overflow-y: scroll; 
max-height: 250px;
overflow-x: hidden;
margin-right: 1vw;
max-width: 700px;
}

.comm::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa;
}

.comm::-webkit-scrollbar-thumb { background: #2c2c2c; } 

.comments {
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: auto;
  padding: 10px 10px;
  font-size: 14px;
  color: #2c2c2c;
  margin: 10px 0 10px 0px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
  max-width: 700px;
}

.comments_mob {
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: auto;
  padding: 10px 10px;
  font-size: 14px;
  color: #2c2c2c;
  margin: 10px 0 10px 0px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
}

.item1 {
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: 16vw;
  max-width: 300px;
  padding: 10px 10px 10px 0px;
  font-size: 14px;
  color         :#ED4144;
  margin: 0px 0 0px 0px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
  display:flex;
  align-content:center;
  
}

.item2 {
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width:70vw;
  max-width: 500px;
  min-width: 300px ;
  padding: 10px 10px;
  font-size: 14px;
  color: #2c2c2c;
  margin: 0px 0 0px 0px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
}

.item1_mob {
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: 85vw;
  min-width: 250px;
  padding: 10px 10px 10px 0px;
  font-size: 14px;
  color         :#ED4144;
  margin: 0px 0 0px 0px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
  display:flex;
  align-content:center;
}

.item2_mob {
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: 85vw;
  min-width: 250px;
  padding: 10px 10px 10px 10px;
  font-size: 14px;
  color: #2c2c2c;
  margin: 0px 0 0px 0px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
  display:flex;
  align-content:center;
}

.is-complete {
  text-decoration : none;
  color           : #ed4144;
  font-size       : 16px;
}

.del {
  background    : #ed4144;
  color         : #fff;
  border        : none;
  padding       : 5px 9px;
  border-radius : 50%;
  cursor        : pointer;
  float         : right;
}

.more_info_btn {
  background-color  : white;
  width             : 100px;
  font-style        : bold;
  border            : none;
  color             : #979797;
  font-size         : 12px;
  cursor            : pointer;
  text-decoration   : none;
}

.more_info_btn:hover {
  filter  : none;
  color   : #ed4144;
}

.more_info_btn:focus { outline: none;}

.rating-box{
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: auto;
  padding: 0px 10% 0px 10%;
  font-size: 14px;
  color: #ED4144;
  margin: 0px 0px 0px 0px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px; 
}

.rating {
  display       : inline-block;
  position      : relative;
  height        : auto;
  line-height   : auto;
  font-size     : 30px;
  letter-spacing: 10px;
  margin-top    : 5px;
  margin-left   :10px;
  float         :left;
}

.rating label {
  position  : absolute;
  top       : 0;
  left      : 0;
  height    : 100%;
  cursor    : pointer;
}

.rating label:last-child { position: static;}
.rating label:nth-child(1) { z-index: 5;}
.rating label:nth-child(2) { z-index: 4;}
.rating label:nth-child(3) { z-index: 3;}
.rating label:nth-child(4) { z-index: 2;}
.rating label:nth-child(5) { z-index: 1;}

.rating label input {
  position  : absolute;
  top       : 0;
  left      : 0;
  opacity   : 0;
}

.rating label .icon {
  float : left;
  color : transparent;
}

.rating label:last-child .icon { color: #2c2c2c;}

.rating:not(:hover) label input:checked ~ .icon,
.rating:hover label:hover input ~ .icon {
  color: #ed4144;
}

.rating label input:focus:not(:checked) ~ .icon:last-child { color: #2c2c2c;}
</style>
