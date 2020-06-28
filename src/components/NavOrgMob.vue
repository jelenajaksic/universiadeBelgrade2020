<template>
  <div id="nav-org-mob" >
    <nav class="navbar-container" >
      <div class="navbar-mobile">
        <div style="float:right" id="logo">
          <img src="../assets/nav_logo.png" width="auto" height="30" />
        </div>
        
        <div width="100%" style="margin-bottom:50px;">
          <font-awesome-icon icon="bars" class="icon" width="auto" id="bar-icon" @click="showNav = !showNav"/>
        </div>
        
        <div v-if="showNav" >
          <div class="li" style="margin-top:10px;">  <router-link to="/home-org" class="navbar-item">REQUESTS</router-link> </div>
          <div class="li">  <router-link to="/arenas-org" class="navbar-item">ARENAS</router-link> </div>
          <div class="li">   <router-link to="/profile" class="navbar-item">PROFILE</router-link> </div>
          <div  class="li">  <button class="logout_btn" @click="showModal = true">LOG OUT</button> </div>
        </div>
      
      </div>
    </nav>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"> </div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1 style="min-width:200px;"> Are you sure you want to log out?</h1>
        <hr style="height:10pt; visibility:hidden;" />
        <router-link to="/">
          <button class="button" @click="showModal = false" style="margin-bottom:10px;"> Yes </button>
        </router-link>
        <button class="button" @click="showModal = false"> No </button>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: "nav-org-mob",
  data() {
    return {
      showModal: false,
      showNav: false
    };
  }
 };
</script>

<style scoped>
.icon {
    font-size: 1.5rem;
    position: absolute;
    left: 1rem;
    color: #979797;
    cursor: pointer;
    margin-top:10px; 
  }

.icon:hover { color: #2c2c2c; }

.navbar-container {
  left            : 0;           
  top             : 0;            
  width           : 100%;      
  background-color: white;
  filter          : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  margin-bottom   : 3vw;
  border-radius   : 4px;
}

.navbar-mobile {
  background-color  : white;
  margin            : 0px 10px 10px 10px;
  padding           : 10px 10px 10px 10px;
  margin-bottom     : 10px;
  display           : block;
  list-style-type   : none;
  overflow          : hidden;
}

.li {
  width           : 100%;
  font-size       : 24px;
  margin-bottom   : 10px;
  margin-bottom   : 10px;
  cursor          : pointer;
  margin-right    : 20px;
  z-index         : 100;
  text-align      : left;
  text-decoration : none;   
}

.li a {
  display         : block;
  font-family     : Bebas Neue, sans-serif;
  color           : #979797;
  text-decoration : none;
  font-style      : none;
}

.li a:hover { color: #2c2c2c;}

a.router-link-exact-active { color: #ed4144 !important; }

.logout_btn {
  font-size           : 24px;
  cursor              : pointer;
  display             : block;
  font-family         : Bebas Neue, sans-serif;
  color               : #979797;
  text-align          : left;
  padding             : 0px 0px;
  text-decoration     : none;
  background-color    : white;
  border              : none;
  width               : 100%;
  margin              : 0px 0px;
  cursor              : pointer; 
  transition-duration : none;
  border-radius       : 0;
}

.logout_btn:hover {
  color  : #2c2c2c;
  filter : none;
}

.logout_btn:focus { outline: none;}

#logo {
  font-family     : Roboto, sans-serif;
  font-weight     : bold;
  color           : #ed4144;
  text-align      : center;
  text-decoration : none;
  margin-top      : 10px;
}

</style>
