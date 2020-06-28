<template>
  <div class="blog-item" :style="{backgroundImage: `url(${bgImages[site.id-1]})`} " >
        <button class="blog-title" @click="redirect"> {{site.title}} </button> 

        <div class="blog-liked">
                <div class="rating" >
                    <label for="like">
                        <input type="checkbox" :id="'like'+index"   @input="changeLiked(index)" />
                        <font-awesome-icon icon="heart" class="icon" style="margin-bottom:0px;margin-right:10px;"/>
                    </label>
                </div> 
            <div :id="'output-liked'+index" style="float:right;"> {{site.likes}}</div>
        </div>
  </div>
</template>

<script>
import sites from "../data/sites.js";
import image1 from '../assets/belgradePic/belgrade4.jpg'
import image2 from '../assets/belgradePic/kalemegdan1.jpg'
import image3 from '../assets/belgradePic/hram1.jpg'
import image4 from '../assets/belgradePic/knez1.jpg'
import image5 from '../assets/belgradePic/narodni1.jpg'
import image6 from '../assets/belgradePic/juga1.jpg'
import image7 from '../assets/belgradePic/tesla4.jpg'
import image8 from '../assets/belgradePic/ada1.jpg'
import image9 from '../assets/belgradePic/avala1.jpg'



export default {
  name: "blog-item",

  props: {site: Object,
          index: Number},
  
  data : () => ({
    image1,
    sites: sites,  
    liked: false,
    bgImages: [ image1, image2, image3, image4, image5, image6, image7, image8, image9]
    
    
  }),

  methods: {
    changeLiked(index) {
      var a='output-liked'+index
      this.liked = !this.liked;
      if(this.liked) {
        if(this.site.myLike==false) {
          this.site.myLike = true;
          this.site.likes = parseInt(this.site.likes) + 1;
        }
        document.getElementById(a).style.color = "#ed4144";
      } else {
        if(this.site.myLike==true) {
          this.site.myLike = false;
          this.site.likes = parseInt(this.site.likes) - 1;
        }            
        document.getElementById(a).style.color = "#2c2c2c";
      }
      this.$emit('sort')

    },

    redirect() {
      this.$router.push({
      name: 'blog-page',
      params: {
        pageData: this.site
        }
      })
    },
  },

};
</script>

<style scoped>
.blog-item {
  background-color: white;
  background-position: right;
  background-size: cover;
  background-position: center;
  font-family: Roboto, sans-serif;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width:23vw;
  min-width: 280px;
  max-width: 400px;
  height: 300px;
  padding: 0px 0px ;
  font-size: 16px;
  color: #2c2c2c;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
 
}


.blog-title{
    background-color: white;
    color: #2c2c2c;
    opacity: 85%;
    font-family: Bebas Neue, sans-serif;
    font-size: 24px;
    text-align: left;
    letter-spacing: 5px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 75%;
    left:0%;
    padding: 5px 5px 5px 10px;
    margin: 0px 0px 0px 0px;
   
    border: 0px;
    border-radius: 0px;
    
    display:flex;
    align-items: left;
    justify-content: flex-start; 
    align-content: flex-start;

    
}

.blog-title:hover {
  cursor: pointer;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.2));
  color: #ed4144;
  /* background-color: #ed4144; */
}

.blog-liked {
    background-color: white;
    opacity: 85%;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    width: auto;
    height: auto;
    position: fixed;
    top: 60%;
    right:0%;
    padding: 3px 10px 3px 10px;
    border: 0px;
    border-radius: 0px;

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
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left:0px;
 
}

/* .rating label {
  position: static;
  top: 0;
  left: 0;
  height: 100%;
  cursor: pointer;
} */


.rating label input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}

.rating label .icon {
  float: left;
  color: transparent;
  color: #2c2c2c;
  
}


.rating:not(:hover) label input:checked ~ .icon,
.rating:hover label:hover input ~ .icon {
  color: #ed4144;
}

</style>
