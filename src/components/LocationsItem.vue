<template>
  <div>
    <div class="locations-item">
      <table >
        <tr align="left">
          <td width="10"></td>

          <td width="10%" v-if="location.name === currentUser.accomodation || location.name === currentUser.restaurant " >
            <font-awesome-icon v-if="location.type === 'Accomodation'" icon="bed" class="icon" style="margin-right:5px;margin-left:5px;widht:20px;height:auto;color: #ed4144;"/>
            <font-awesome-icon v-else icon="utensils" class="icon" style="margin-right:5px;margin-left:5px;widht:20px;height:auto;color: #ed4144;"/>
          </td>
          <td width="10%" v-else-if="location.type === 'Accomodation'" >
            <font-awesome-icon icon="bed" class="icon" style="margin-right:5px;margin-left:5px;widht:20px;height:auto;"/>
          </td>
          <td width="10%" v-else >
            <font-awesome-icon icon="utensils" class="icon" style="margin-right:5px;margin-left:5px;widht:20px;height:auto;"/>
          </td>
        
          <td width="10"></td>

          <td width="90%" style="color: #ed4144;" v-if="location.name === currentUser.accomodation || location.name === currentUser.restaurant ">
            {{ location.name }}
          </td>
          <td width="90%"  v-else>
            {{ location.name }}
          </td>

          <td>
              <button id="more-info" class="more_info_btn" @click="$emit('set-id', location.id-1)"> Read more</button>
          </td>

        </tr>
      </table>
    </div>


   

  </div>
</template>

<script>
import locations from "../data/locations.js";
import currentUser from "../data/currentUser.js";



export default {
  name: "locations-item",
  props: ["location"],

  data() {
    return {
      locations:locations,
      currentUser:currentUser,

    };
  },


};
</script>

<style scoped>

.locations-item {
  background: white;
  font-family: Roboto, sans-serif;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: 95%;
  
  font-size: 14px;
  padding: 5px 5px;
  color: #2c2c2c;
  margin: 0px 0px 10px 5px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
}


.more_info_btn {
  background-color: white;
  width: auto;
  font-style: bold;
  border: none;
  color: #979797;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;

}

.more_info_btn:hover {
  filter: none;
  color: #ed4144;

}

.more_info_btn:focus {
  outline: none;
}



.my-comment{
    background: white;
    font-family: Roboto, sans-serif;
    filter: none;
    width: 90%;
    height: auto;
    padding: 10px 10px;
    font-size: 14px;
    color: #2c2c2c;
    margin: none;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color:#aaa ;
    border-radius: 0px;
    align: left;
}

.comm {
overflow-y: scroll; 
max-height: 150px;
overflow-x: hidden;
}
.comm::-webkit-scrollbar {

    width: 5px;
    height: 8px;
    background-color: #aaa;
}
.comm::-webkit-scrollbar-thumb {
    background: #2c2c2c; 
} 

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
}


.item1 {
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: auto;
  max-width: 300px;

  padding: 10px 10px;
  font-size: 14px;
  color: #2c2c2c;
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
  width: 400px;
  padding: 10px 10px;
  font-size: 14px;
  color: #2c2c2c;
  margin: 0px 0 0px 0px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px;
}



.is-complete {
  text-decoration: none;
  color: #ed4144;
  font-size: 16px;
}

.del {
  background: #ed4144;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

.more_info_btn {
  background-color: white;
  width: 100px;
  font-style: bold;
  border: none;
  color: #979797;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;

}

.more_info_btn:hover {
  filter: none;
  color: #ed4144;

}

.more_info_btn:focus {
  outline: none;
}

.rating-box{
  background: white;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width: 500px;
  padding: 0px 150px;
  font-size: 14px;
  color: #ED4144;
  margin: 0px 0px 0px 0px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 4px; 

}

.rating {
  display: inline-block;
  position: relative;
  height: auto;
  line-height: auto;
  font-size: 30px;
  letter-spacing: 10px;
  margin-top: 5px;
  margin-left:10px;
  float:left;
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
  /* text-shadow: 0 0 5px #ed4144; */
}
</style>
