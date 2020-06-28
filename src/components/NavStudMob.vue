<template>
  <div id="nav-stud-mob" >
    <nav class="navbar-container" >
      <div class="navbar-mobile">
        <div style="float:right" id="logo">
          <img src="../assets/nav_logo.png" width="auto" height="30" />
        </div>
        
        <div width="100%" style="margin-bottom:50px;">
          <font-awesome-icon icon="bars" class="icon" width="auto"  @click="showNav = !showNav"/>
        </div>
        
        <div v-if="showNav" >
          <div class="li" style="margin-top:10px;">  <router-link to="/home" class="navbar-item">GAMES</router-link> </div>
          <div class="li">  <router-link to="/facilities" class="navbar-item">FACILITIES</router-link> </div>
          <div class="li">   <router-link to="/tourist-sites" class="navbar-item">TOURIST SITES</router-link> </div>
          <div class="li">   <router-link to="/profile-stud" class="navbar-item">PROFILE</router-link> </div>
          <div  class="li">  <button class="logout_btn" @click="showModal = true">LOG OUT</button> </div>
        </div>
        
        
      </div>
    </nav>

    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1 style="min-width:200px;"> Are you sure you want to log out?</h1>
        <hr style="height:20pt; visibility:hidden;" />
        <router-link to="/">
          <button class="button" @click="showModal = false" style="margin-bottom:10px;">
            Yes
          </button>
        </router-link>
        <button class="button" @click="showModal = false">
          No
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "nav-stud-mob",
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

.icon:hover {
  color: #2c2c2c;
}

.navbar-container {

  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  width: 100%;      /* take up the full browser width */
  /* z-index:0;   */
  /* height:100px;  */
  
  background-color: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  margin-bottom: 20px;
   border-radius: 4px;
  

}

.navbar-mobile {
  background-color: white;
  margin: 0px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
  display:block;

  list-style-type: none;

  overflow: hidden;
  display:block;

  

}

/* ul {
   list-style: none;
    width: 100%;
    z-index: 100;
  
} */

.li {
  /* float: left; */
  width: 100%;
      font-size: 24px;
      /* font-size: 2rem; */
      /* font-weight: bold; */
      margin-bottom: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      margin-right: 20px;
      /* width: 100%; */
    z-index: 100;
    /* letter-spacing: 2px; */
    text-align: left;
    text-decoration: none;
    


}

.li a {
  display: block;
  font-family: Bebas Neue, sans-serif;
  /* font-size: 24px; */
  color: #979797;
  /* text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  margin-bottom: 14px; */
  text-decoration: none;
}

.li a:hover {
  color: #2c2c2c;
}

a.router-link-exact-active {
  color: #ed4144 !important;
}

.logout_btn {
  

      font-size: 24px;
      /* font-weight: bold; */
      /* margin-bottom: 20px; */
      /* letter-spacing: 2px; */
      
      cursor: pointer;
  display: block;
  font-family: Bebas Neue, sans-serif;
  /* font-size: 24px; */
  color: #979797;
   text-align: left;
  padding: 0px 0px;
  text-decoration: none;
  /* margin-bottom: 14px; */

  background-color: white;
  border: none;

  width: 100%;
  margin: 0px 0px;
  cursor: pointer; 
  transition-duration: none;
  border-radius: 0;
}

.logout_btn:hover {
  color: #2c2c2c;
  filter: none;
}

.logout_btn:focus {
  outline: none;
}

#logo {
  /* display: block; */
  font-family: Roboto, sans-serif;
  
  font-weight: bold;
  color: #ed4144;
  text-align: center;
  
  text-decoration: none;
  margin-top:10px;
}

</style>
