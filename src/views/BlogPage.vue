<template>
  <div id="blog-page" >
      <NavStud v-if="!mobileView" />
      <NavStudMob v-if="mobileView" />


      <div class="grid" v-if="!mobileView" >     
        <div class="gallery" >
        <figure class="gallery__item gallery__item--1" >
         <img v-bind:src=" require('../assets/belgradePic/' + pageData.picture1)  "  class="gallery__img" alt="Image 1">
        </figure>
        <figure class="gallery__item gallery__item--2">
            <img v-bind:src=" require('../assets/belgradePic/' + pageData.picture2)  "  class="gallery__img" alt="Image 2">
        </figure>
        <figure class="gallery__item gallery__item--3">
            <img v-bind:src=" require('../assets/belgradePic/' + pageData.picture3)  "  class="gallery__img" alt="Image 3">
        </figure>
        <figure class="gallery__item gallery__item--4">
            <img v-bind:src=" require('../assets/belgradePic/' + pageData.picture4)  "  class="gallery__img" alt="Image 4">
        </figure>
        </div>


        <div style="width:100%;margin-top: 20px; margin-left: 20px;" align="left">
            <div class="title"> {{pageData.title}} </div>
            <div class="subtitle"> {{pageData.subtitle}} </div>
            <hr style="color: #ed4144;border-top: 3px solid #ed4144; width:30%;opacity:90%;border-radius: 2px; margin-bottom:40px;" align="left">
            <div class="body" > {{pageData.body}} </div>
            <div class="body" > {{pageData.body}} </div>
            <div class="body" > {{pageData.body}} </div>

            <div class="blog-liked">
            <div >
                <form class="rating" >
                    <label for="like" id="like">
                        <input type="checkbox" id="like"   @input="changeLiked()" />
                        <font-awesome-icon icon="heart" id='a' class="icon" style="margin-bottom:0px;margin-right:10px;" ref="heart-icon"/>
                    </label>
                </form> 
            </div>
            <div id="output-liked" style="float:right;" ref="like-num"> {{pageData.likes}} </div>
        </div>
        </div>
      </div>

      

      <div v-if="mobileView" >   

      <div style="margin-right:0vw; margin-left:0vw;">
      <carousel :per-page="1"  autoplay="true" loop="true" autoplayTimeout="5000" paginationActiveColor="#ed4144" paginationPadding="3" paginationSize="6">
        <slide>  <img v-bind:src=" require('../assets/belgradePic/' + pageData.picture1)  "  class="gallery__img_mob" alt="Image 1"> </slide>
        <slide>  <img v-bind:src=" require('../assets/belgradePic/' + pageData.picture2)  "  class="gallery__img_mob" alt="Image 2"> </slide>
        <slide>  <img v-bind:src=" require('../assets/belgradePic/' + pageData.picture3)  "  class="gallery__img_mob" alt="Image 3"> </slide>
        <slide>  <img v-bind:src=" require('../assets/belgradePic/' + pageData.picture4)  "  class="gallery__img_mob" alt="Image 4"> </slide>
      </carousel>
      </div>

        <div style="width:100%;margin-top: 20px; margin-left: 3vw;margin-right: 3vw;" align="left">

            <div class="title_mob"> {{pageData.title}} </div>
            <div class="subtitle_mob"> {{pageData.subtitle}} </div>
            <hr style="color: #ed4144;border-top: 3px solid #ed4144; width:30%;opacity:90%;border-radius: 2px; margin-bottom:5vh;" align="left">
            <div class="body_mob" > {{pageData.body}} </div>
            <div class="body_mob" > {{pageData.body}} </div>
            <div class="body_mob" > {{pageData.body}} </div>

            <div class="blog-liked_mob">
            <div >
                <form class="rating" >
                    <label for="like" id="like">
                        <input type="checkbox" id="like"   @input="changeLiked()" />
                        <font-awesome-icon icon="heart" id='a' class="icon" style="margin-bottom:0px;margin-right:10px;" ref="heart-icon"/>
                    </label>
                </form> 
            </div>
            <div id="output-liked" style="float:right;" ref="like-num"> {{pageData.likes}} </div>
        </div>
        </div>
      </div>



  </div>
</template>

<script>
import sites from "../data/sites.js";
import NavStud from "../components/NavStud.vue";
import NavStudMob from "../components/NavStudMob.vue";
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "blog-page",
  components: {
      NavStud,
      NavStudMob,
      Carousel,
      Slide
  },

  props: {
  pageData: {
    type: Object
  }
},

  data() {
      return {
          sites:sites,
          liked: false,
           mobileView: false,
           tabletView: false,
           showPicID: 1,

      }
  },

  mounted() {
    console.log(this.pageData.myLike)
    console.log(this.$refs["heart-icon"])
    if(this.pageData.myLike===true){
      this.liked=true;
      this.$refs["heart-icon"].style.color="#ed4144";
      this.$refs["like-num"].style.color="#ed4144";
    }
    else {
      this.$refs["heart-icon"].style.color="#2c2c2c";
      this.$refs["like-num"].style.color="#2c2c2c";
    }
  },

    methods: {
        changeLiked() {
        this.liked = !this.liked
        if(this.liked) {
          if(this.pageData.myLike == false) {
            this.pageData.myLike = true;
            this.pageData.likes = parseInt(this.pageData.likes) + 1;
          }
            document.getElementById("output-liked").style.color = "#ed4144";
        } else {
          if(this.pageData.myLike == true) {
            this.pageData.myLike = false
            this.pageData.likes = parseInt(this.pageData.likes) - 1;
          }
            document.getElementById("output-liked").style.color = "#2c2c2c";
        }
    },
    
     handleView() { 
       this.mobileView = window.innerWidth <= 800;
        },
     
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },

  updated() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
     if(this.pageData.myLike===true){
      this.$refs["heart-icon"].style.color="#ed4144";
      this.$refs["like-num"].style.color="#ed4144";
    }
    else {
      this.$refs["heart-icon"].style.color="#2c2c2c";
      this.$refs["like-num"].style.color="#2c2c2c";
    }

  },


};
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: 50% 40%;
  column-gap: 30px;
  row-gap: 30px;

  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;  

  justify-content: center; 
  margin-top: 20px;
}

 ::-webkit-scrollbar {
   width: 0px;  
    background: transparent; 
    /* width: 5px;
    height: 8px;
    background-color: #aaa;  */
}
/* ::-webkit-scrollbar-thumb {
    background: #2c2c2c; 
} */


.title {
   color: #2c2c2c;
   width: 30vw;
    font-family: Bebas Neue, sans-serif;
    font-size: 36px;
    letter-spacing: 12px;
    margin-bottom: 40px;
    
}

.subtitle {
   color: #2c2c2c;
   width: 25vw;
    font-family: Roboto Condensed Italic, sans-serif;
    font-size: 18px;
    font-style: italic;

   margin-bottom: 15px;
    
}

.body {
    color: #2c2c2c;
    width: 33vw;
    min-width: 250px;
    font-family: Roboto Light, sans-serif;
    font-size: 14px;
    font-style: none;

   margin-top: 14px;

}

.title_mob {
   color: #2c2c2c;
   width: 80%;
    font-family: Bebas Neue, sans-serif;
    font-size: 28px;
    letter-spacing: 12px;
    margin-bottom: 5vh;
    
}

.subtitle_mob {
   color: #2c2c2c;
   width: 66%;
    font-family: Roboto Condensed Italic, sans-serif;
    font-size: 16px;
    font-style: italic;

   margin-bottom: 10px;
    
}

.body_mob {
    color: #2c2c2c;
    width: 88vw;
    font-family: Roboto Light, sans-serif;
    font-size: 14px;
    font-style: none;

   margin-top: 14px;

}


.gallery{

    display:grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(12, 6vw);
    grid-gap: 0px ; 
    align-items:stretch;
   
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* display: block;  */
}

.gallery__img_mob {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    display: block; 
}

.gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 4;
}

.gallery__item--2 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
}

.gallery__item--3 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 6;
}

.gallery__item--4 {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
}



.blog-liked {
    background-color: white;
    opacity: 85%;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    width: auto;
    height: auto;
    position: fixed;
    top: 30%;
    right:5%;
    padding: 5px 5px 5px 5px;
    border: 0px;
    border-radius: 4px;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));

    display:flex;
    align-items: center;
    justify-content: space-between;
    
}
.blog-liked_mob {
    background-color: white;
    opacity: 85%;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    width: auto;
    height: auto;
    position: fixed;
    top: 70vh;
    right:7vw;
    padding: 5px 5px 5px 5px;
    border: 0px;
    border-radius: 4px;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));

    display:flex;
    align-items: center;
    justify-content: space-between;
    
}

.rating {
  display: inline-block;
  position: relative;
  height: auto;
  line-height: auto;
  font-size: 24px;
  margin-top: 4px;
  margin-left:0px;
 
}

.rating label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  cursor: pointer;
}

.rating label:last-child {
  position: static;
}

.rating label:nth-child(1) {
  z-index: 5;
}

.rating label:nth-child(2) {
  z-index: 4;
}

.rating label:nth-child(3) {
  z-index: 3;
}

.rating label:nth-child(4) {
  z-index: 2;
}

.rating label:nth-child(5) {
  z-index: 1;
}

.rating label input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.rating label .icon {
  float: left;
  color: transparent;
}

.rating label:last-child .icon {
  color: #2c2c2c;
}

.rating:not(:hover) label input:checked ~ .icon,
.rating:hover label:hover input ~ .icon {
  color: #ed4144;
}

.rating label input:focus:not(:checked) ~ .icon:last-child {
  color: #2c2c2c;
  text-shadow: 0 0 5px #ed4144;
}

</style>
