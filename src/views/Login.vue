<template>
  <div class="login">
    <hr style="height:6vw; visibility:hidden;" />
    <div width="100%" align="center">
      <img src="../assets/logo_login.png" class="login_img" />
    </div>
    
    <hr style="height:60pt; visibility:hidden;" />
    
      <table align="center"  style="width:20vw;min-width:200px;">
        <tr> <input type="text" v-model="username" placeholder="username" @input="disableWarning" /> </tr>
        <tr> <input type="password" v-model="password" placeholder="password" @input="disableWarning" /> </tr>
        <tr> 
          <div id="wrong-input" align="left" style="position: absolute;display:none; " >
          <img src='../assets/login_warning.png' width="320px" v-if="!mobileView"> 
          <img src='../assets/login_warning.png' width="80%"  v-if="mobileView" > 
          </div> 
        </tr>
        <hr style="height:40pt; visibility:hidden;" />
        <tr>
          <td colspan="2" align="center">
            <button class="btn btn-success" @click="login">Log in</button>
          </td>
        </tr>
      </table>
   
    <hr style="height:10pt; visibility:hidden;" />

    <button class="forgot_pass_btn" @click="showModal = true">
      Forgot your password?
    </button>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"> </div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1 style="min-width:200px;">The request has been sent to your e-mail address.</h1>
        <hr style="height:10pt; visibility:hidden;" />
        <button class="button" @click="showModal = false"> Ok </button>
      </div>
    </transition>

  </div>
</template>


<script>
import router from "../router/index.js";
import users from "../data/usersData.js";
import currentUser from "../data/currentUser.js";

export default {
  name: "login",

  data() {
    return {
      username: "",
      password: "",
      users: users,
      currentUser: currentUser,
      showModal: false,
      mobileView: false
    };
  },

  methods: {
    login() {
      var user = this.users.find( user => (user.username == this.username) & (user.password == this.password));

      if(user == undefined) { 
        document.getElementById("wrong-input").style.display = "block"; 
      }      
      else if((user.username != null) && (user.password != null)) {
          currentUser.username = user.username;
          currentUser.password = user.password;
          currentUser.name = user.name;
          currentUser.address = user.address;
          currentUser.phone = user.phone;
          currentUser.accomodation = user.accomodation;
          currentUser.restaurant = user.restaurant;
            if (user.username.includes("stud")) {
              router.push("home");
            } else if (user.username.includes("org")) {
              router.push("home-org");
            }  
      }  
    },

    disableWarning() { document.getElementById("wrong-input").style.display = "none"; },

    handleView() {this.mobileView = window.innerWidth <= 500; }

  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },

  updated() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }

};
</script>

<style scoped>

.login_img {
  min-width :280px;
  max-width :500px;
  width     :80%;
  height    :auto; 
}

h1 { font-size: 16px; }

.forgot_pass_btn {
  background-color  : white;
  width             : 200px;
  font-style        : bold;
  border            : none;
  color             : #ed4144;
  font-size         : 12px;
  cursor            : pointer;
  text-decoration   : none;
}

.forgot_pass_btn:hover { filter: none; }

.forgot_pass_btn:focus { outline: none; }

</style>
