<template>
  <div id="profile-stud">
    <NavStud  v-if="!mobileView" />
    <NavStudMob  v-if="mobileView" />

    <hr style="height:6vw; visibility:hidden;"  />
    
    <table class="relative" v-if="!mobileView">
      <tr>
        <td rowspan="9" v-if="!showPic">
          <img src="../assets/profile.jpg" width="300" height="300" style="border-radius:50%; object-fit: cover;"/>
        </td>
        <td rowspan="9" width="50px" v-if="!showPic" ></td>
        <th class="item1" align="left">Name</th>
        <td rowspan="9" width="10px"></td>
        <td class="item2" align="left">{{ currentUser.name }}</td>
        <td rowspan="9" width="10px"></td>
        <td>
          <button class="item3" align="center" @click="showModal = true; setChanging('name')">
            <font-awesome-icon icon="pen" class="icon" width="auto" style="font-size:20px;color: #979797;"  />
          </button>
        </td>
      </tr>
      <tr colspan="2" height="10px"></tr>
      <tr>
        <th class="item1" align="left">Address</th>
        <td class="item2" align="left">{{ currentUser.address }}</td>
        <td>
          <button class="item3" align="center" @click="showModal = true;setChanging('address')">
            <font-awesome-icon icon="pen" class="icon" width="auto" style="font-size:20px;color: #979797;"  />
          </button>
        </td>
      </tr>
      <tr colspan="2" height="10px"></tr>
      <tr>
        <th class="item1" align="left">Phone number</th>
        <td class="item2" align="left">{{ currentUser.phone }}</td>
        <td>
          <button class="item3" align="center" @click="showModal = true;setChanging('phone')">
            <font-awesome-icon icon="pen" class="icon" width="auto" style="font-size:20px;color: #979797;"  />
          </button>
        </td>
      </tr>
      <tr colspan="2" height="10px"></tr>
      <tr>
        <th class="item1" align="left">Username</th>
        <td class="item2" align="left">{{ currentUser.username}}</td>
      </tr>
      <tr colspan="2" height="10px"></tr>
      <tr>
        <th class="item1" align="left">Password</th>
        <td class="item2" align="left"> <div type="passowrd"> {{ currentUser.password }}  </div>  </td>
        <td>
          <button class="item3" align="center" @click="showModalpass = true">
            <font-awesome-icon icon="pen" class="icon" width="auto" style="font-size:20px;color: #979797;"  />
          </button>
        </td>
      </tr>
    </table>


    <table class="relative" v-if="mobileView" >
      <tr>
        <th class="item1_mob" align="left">Name</th>
        <td width="2vw"></td>
        <td >
          <button class="item3_mob " align="center" @click="showModal = true; setChanging('name')">
            <font-awesome-icon icon="pen" class="icon" width="auto" style="font-size:20px;color: #979797;height:auto;"  />
          </button>
        </td>
      </tr>
      <tr  height="2vw"></tr>
      <tr >
        <td colspan="3" class="item2_mob" align="left"> {{ currentUser.name }}</td>
      </tr>
      <tr colspan="2" height="20px"></tr>
      <tr>
        <th class="item1_mob" align="left">Address</th>
        <td width="2vw"></td>
        <td>
          <button class="item3_mob " align="center" @click="showModal = true; setChanging('address')">
            <font-awesome-icon icon="pen" class="icon" width="auto" style="font-size:20px;color: #979797;"  />
          </button>
        </td>
      </tr>
      <tr  height="2vw"></tr>
      <tr>
        <td class="item2_mob" align="left" colspan="3">  {{ currentUser.address }}</td>
      </tr>
      <tr colspan="2" height="20px"></tr>
      <tr>
        <th class="item1_mob" align="left">Phone number</th>
        <td width="2vw"></td>
        <td>
          <button class="item3_mob " align="center" @click="showModal = true; setChanging('phone')">
            <font-awesome-icon icon="pen" class="icon" width="auto" style="font-size:20px;color: #979797;"  />
          </button>
        </td>
      </tr>
      <tr  height="2vw"></tr>
      <tr>
        <td class="item2_mob" align="left" colspan="3"> {{ currentUser.phone }}</td>
      </tr>
      <tr colspan="2" height="20px"></tr>
      <tr>
        <th class="item1_mob" align="left">Username</th>
      </tr>
      <tr  height="2vw"></tr>
      <tr>
        <td class="item2_mob" align="left" colspan="3"> {{ currentUser.username }}</td>
      </tr>
      <tr colspan="2" height="20px"></tr>
      <tr>
        <th class="item1_mob" align="left">Password</th>
        <td width="2vw"></td>
        <td>
          <button class="item3_mob " align="center" @click="showModalpass = true">
            <font-awesome-icon icon="pen" class="icon" width="auto" style="font-size:20px;color: #979797;"  />
          </button>
        </td>
      </tr>
      <tr  height="2vw"></tr>
      <tr>
        <td class="item2_mob" align="left" colspan="3" > {{ currentUser.password }}</td>
      </tr>
      <tr colspan="2" height="20px"></tr>  
    </table>


    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false" ></div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
          <table align="center" >
            <tr> <input type="text" v-model="newData" placeholder= "new data"  @input="disableWarning"/> </tr>
            <tr> <input type="password" v-model="confirmedPassword" placeholder="password" @input="disableWarning" /> </tr>
            <tr>
              <div id="wrong-input" align="left" style="position: absolute;display:none;" width="100%" > 
                <img src='../assets/warning_pass.png' width="320" v-if="!mobileView"> 
                <img src='../assets/warning_pass.png' width="90%" v-if="mobileView" > 
              </div> 
            </tr>
            <tr style="height:40pt; visibility:hidden;"></tr>
          </table>

          <button class="btn btn-success" @click="changeData()" style="margin-bottom:10px;"> Submit </button>
          <button class="btn btn-success" @click="showModal = false"> Close </button>
      </div>
    </transition>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModalpass" @click="showModalpass = false" ></div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModalpass">
          <table align="center" >
            <tr> <input type="password" v-model="newData" placeholder="old password" @input="disableWarning"/> </tr>
            <tr> <input type="password" v-model="confirmedPassword" placeholder="new password" @input="disableWarning" /> </tr>
            <tr> <input type="password" v-model="confirmedPassword1" placeholder="confirm password" @input="disableWarning"/> </tr>
            <tr>
              <div id="wrong-input" align="left" style="position: absolute;display:none;" >
                <img src='../assets/warning_pass.png' width="320" v-if="!mobileView"> 
                <img src='../assets/warning_pass.png' width="90%" v-if="mobileView" > 
              </div> 
            </tr>
            <tr style="height:40pt; visibility:hidden;"></tr>
          </table>
          
          <button class="btn btn-success" @click=" changePass()" style="margin-bottom:10px;"> Submit </button>
          <button class="btn btn-success" @click="showModalpass = false"> Close </button>
      </div>
    </transition>

  </div>
</template>

<script>
import NavStud  from "../components/NavStud.vue";
import NavStudMob from "../components/NavStudMob.vue";
import currentUser from "../data/currentUser.js";

export default {
  name: "profile-stud",

  components: {
    NavStud,
    NavStudMob
  },

  data() {
    return {
      newData: '',
      confirmedPassword: '',
      confirmedPassword1: '',
      changing: '',
      currentUser: currentUser,
      showModal: false,
      showModalpass: false,
      showPic: true,
      mobileView: false,
    };
  },

  methods :{
    setChanging(i) { this.changing = i; },

    changeData() {
      if(this.confirmedPassword != currentUser.password) {
        document.getElementById("wrong-input").style.display = "block";
      } 
      if (this.confirmedPassword == currentUser.password) {
        if (this.changing == 'name') { currentUser.name = this.newData; this.newData = ''; } 
        else if (this.changing == 'address') { currentUser.address = this.newData; this.newData = ''; }
        else if (this.changing == 'phone') { currentUser.phone = this.newData; this.newData = ''; }
        this.showModal = false;
        this.changing= '';
      };
      this.newData = '';
      this.confirmedPassword = '';
    },

    changePass() {
      if((this.newData != currentUser.password) || (this.confirmedPassword != this.confirmedPassword1)) {
        document.getElementById("wrong-input").style.display = "block";
      } 
      if ((this.newData == currentUser.password) && (this.confirmedPassword == this.confirmedPassword1)) {
        currentUser.password = this.confirmedPassword;
        this.showModalpass = false;
      }
      this.newData = '';
      this.confirmedPassword = '';
      this.confirmedPassword1 = '';
    },

    disableWarning() { document.getElementById("wrong-input").style.display = "none"; },

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
#profile-stud {
  height      :96vh;
  overflow-y  : scroll;
}

.relative {  margin: 0 auto;}

.item1 {
  background    : white;
  font-family   : Roboto, sans-serif;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 200px;
  height        : 50px;
  padding       : 10px 10px;
  font-size     : 16px;
  color         : #2c2c2c;
  font-style    : bold;
  margin        : 10px 0 10px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.item2 {
  background    : white;
  font-family   : Roboto, sans-serif;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 300px;
  height        : 50px;
  padding       : 10px 10px;
  font-size     : 16px;
  color         : #2c2c2c;
  margin        : 10px 0 10px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.item1_mob {
  background    : white;
  font-family   : Roboto, sans-serif;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 70vw;
  min-width     : 220px;
  height        : 50px;
  padding       : 10px 10px;
  font-size     : 16px;
  color         : #2c2c2c;
  font-style    : bold;
  margin        : 10px 0 10px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.item2_mob {
  background    : white;
  font-family   : Roboto, sans-serif;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 80vw;
  min-width     : 290px;
  height        : 50px;
  padding       : 10px 10px;
  font-size     : 16px;
  color         : #2c2c2c;
  margin        : 10px 0 10px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.item3 {
  background    : white;
  font-family   : Roboto, sans-serif;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 60px;
  height        : 50px;
  padding       : 10px 10px;
  font-size     : 16px;
  color         : #2c2c2c;
  margin        : 0px 0 0px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.item3_mob {
  background    : white;
  font-family   : Roboto, sans-serif;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 10vw;
  min-width     : 60px;
  height        : 50px;
  padding       : 10px 10px;
  font-size     : 16px;
  color         : #2c2c2c;
  margin        : 0px 0 0px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.item3:hover {  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.2));}

.item3_mob:hover {filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.2));}

</style>
