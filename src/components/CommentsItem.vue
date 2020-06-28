<template>
  <div >
    <div class="comments-item">
      <table >
        <tr align="left">
          <td width="10"></td>

          <td width="30">
            <img src="../assets/profile_pic.png" width="20" height="auto" />
          </td>
        
          <td width="10"></td>

          <td width="500px">
            {{ comment.body }}
          </td>

          <td width="10"></td>

          <td width="30px" >
            <form class="rating" style="margin-right:5px; margin-bottom:10px;"   @input="changeLiked()">
                  <label for="like">
                    <input type="checkbox" id="like"  />
                    <font-awesome-icon icon="thumbs-up" class="icon" />
                  </label>
            </form>  
            <form class="rating" @input="changeDisliked()">
                  <label for="dislike">
                    <input type="checkbox" id="dislike" />
                    <font-awesome-icon icon="thumbs-down" class="icon"/>
                  </label>                  
            </form>   
          </td>

          <td width="20px" >
            <div style="margin-bottom:15px" id="output-liked"> {{comment.liked}}</div>
            <div id="output-disliked">{{comment.disliked}}</div>
          </td>

        </tr>
      </table>
    </div>


  </div>
</template>

<script>
import comments from "../data/comments.js";

export default {
  name: "comments-item",
  props: ["comment"],
  data() {
    return {
      comments:comments,
      disliked: false,
      liked:false
    };
  },
  methods: {
    changeDisliked() {
      this.disliked = !this.disliked;
      if(this.disliked) {
        this.comment.disliked = this.comment.disliked + 1;
        document.getElementById("output-disliked").style.color = "#ed4144";
      } else {
        this.comment.disliked = this.comment.disliked - 1;
        document.getElementById("output-disliked").style.color = "#2c2c2c";
      }
    },

    changeLiked() {
      this.liked = !this.liked;
      if(this.liked) {
        this.comment.liked = this.comment.liked + 1;
        document.getElementById("output-liked").style.color = "#ed4144";
      } else {
        this.comment.liked = this.comment.liked - 1;
        document.getElementById("output-liked").style.color = "#2c2c2c";
      }
    }
  }

};
</script>

<style scoped>

.comments-item {
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: 75vw;
  max-width: 600px;
  padding: 10px 10px 10px 10px;
  font-size: 12px;
  color: #2c2c2c;
  /* color         :#ED4144; */
  margin: 10px 10px 10px 10px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
}

.rating {
  display: inline-block;
  position: relative;
  height: auto;
  line-height: auto;
  font-size: 20px;
  letter-spacing: 10px;
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


.rating label input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0; 
}

 .rating label .icon {
  float: left;
  color: #2c2c2c;
  
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
