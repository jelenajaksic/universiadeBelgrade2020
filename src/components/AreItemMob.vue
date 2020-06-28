<template>
  <div>
    <div class="request-item">
      <table>
        <tr >
          <td width="20"></td>
          <td style="width:50%; font-size:20px; font-weight:bold;" align="left">  {{ arena.sport }} </td>
          <td style="width:50%; font-size:20px; font-weight:bold;" align="right">  {{ arena.ops }} </td>
        </tr>
        <tr height="20px"></tr>
        <tr align="left">
          <td width="20"></td>
          <td  align="left"> {{ arena.date }} </td>
          <td rowspan="2">
            <div width="auto" align="right" v-if="arena.available">
            <button class="btn btn-success" @click="showModal = true"> Set </button>
          </div>
          <div width="auto" align="right" v-else>
            <button class="btn btn-success" @click="showModalRequest = true"> Request </button>
          </div>
          </td>
        </tr>
        <tr>
          <td width="20"></td>
          <td width="auto" align="left"> {{ arena.time }}  </td>
        </tr>    
      </table>  
    </div>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal || showModalSet || showModalRequest || showModalRequestMsg"
        @click=" showModal = false; showModalSet = false; showModalRequest = false; showModalRequestMsg = false;"> </div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
          <table style="margin-bottom:20px;min-width:250px;">
            <tr> <th class="item1" align="left">Date</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ arena.date}}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Time</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ arena.time }}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Sport</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ arena.sport }}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Opponents</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ arena.ops }}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Available arenas</th> </tr>
            <tr height="5px"></tr>
            <tr>
              <select name="arena" id="arena" class="dropdownMenu"  align="left" @input="enableButton">
                <option value="" disabled selected>select arena</option>
                <option value="Stark arena"> Stark arena </option>
                <option value="Pionir hala"> Pionir hala </option>
                <option value="Tasmajdan"> Tasmajdan </option>
                <option value="Sportski centar Olimp"> Sportski centar Olimp </option>
              </select>
            </tr>
            <tr  height="20px"></tr>
          </table>

          <button class="button" id="set-button"  @click="showModal = false; showModalSet = true;" disabled style="margin-bottom:10px;"> Set </button>
          <button class="button" @click="showModal = false"> Close </button>
      </div>

      <div class="modal" v-if="showModalSet">
        <h1 >Are you sure?</h1>
        <hr style="height:10pt; visibility:hidden;" />
        <button class="button" @click=" showModalSet = false; $emit('del-arena', arena.id); arena.completed = true; ">  Yes </button>
        <button class="button" @click="showModalSet = false"> No </button>
      </div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModalRequest">
        <table style="margin-bottom:20px;min-width:250px;">
            <tr> <th class="item1" align="left">Date</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ arena.date}}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Time</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ arena.time }}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Sport</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ arena.sport }}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Opponents</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ arena.ops }}</td> </tr>
            <tr  height="20px"></tr>

          </table>

          <button class="button" style="margin-bottom:10px;"  @click="showModalRequest = false;showModalRequestMsg = true; "> Request </button>
          <button class="button" @click="showModalRequest = false"> Close </button>
      </div>

      <div class="modal" v-if="showModalRequestMsg">
        <h1 style="min-width:200px;" >Your request has been sent!</h1>
        <hr style="height:10pt; visibility:hidden;" />
        <button  class="button" @click="showModalRequestMsg = false; $emit('del-arena', arena.id); arena.completed = true;" >  Ok </button>
      </div>
    </transition>

  </div>
</template>

<script>
import arenas from "../data/arenas.js";

export default {
  name: "arenas-item",

  props: ["arena"],

  data() {
    return {
      showModal: false,
      showModalSet: false,
      showModalRequest: false,
      showModalRequestMsg: false,
      arenas:arenas
    };
  },

  methods: {
    enableButton() { document.getElementById("set-button").disabled = false; }
  }
};
</script>

<style scoped>
.request-item {
  background    : white;
  font-family   : Roboto, sans-serif;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 100%;
  padding       : 15px 15px;
  font-size     : 16px;
  color         : #2c2c2c;
  margin        : 10px 0 10px 0;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.is-complete {
  text-decoration : none;
  font-size       : 1rem;
}

.del {
  background    : #ff0000;
  color         : #fff;
  border        : none;
  padding       : 5px 9px;
  border-radius : 50%;
  cursor        : pointer;
  float         : right;
}

.item1 {
  background    : white;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : auto;
  min-width     : 200px;
  padding       : 10px 10px;
  font-size     : 14px;
  color         : #2c2c2c;
  margin        : 10px 0 10px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.item2 {
  background    : white;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : auto;
  min-width     : 200px;
  padding       : 10px 10px;
  font-size     : 14px;
  color         : #2c2c2c;
  margin        : 10px 0 10px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.dropdownMenu {
  background    : white;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : auto;
  padding       : 10px 10px;
  min-width     : 250px;
  font-size     : 14px;
  color         : #2c2c2c;
  margin        : 0px 0 0px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.dropdownMenu:focus { outline: none; }
</style>
