<template>
  <div>
    <div class="request-item">
      <table>
        <tr align="left">
          <td width="20"></td>
          <td width="20%"> {{ arena.date }} </td>
          <td width="15%"> {{ arena.time }} </td>
          <td width="20%"> {{ arena.sport }} </td>
          <td width="20%"> {{ arena.ops }} </td>

          <td width="15%" v-if="arena.available"> Yes </td>
          <td width="15%" v-else> No </td>

          <td width="10%" align="center" v-if="arena.available">
            <button class="btn btn-success" @click="showModal = true"> Set </button>
          </td>
          <td width="10%" align="center" v-else>
            <button class="btn btn-success" @click="showModalRequest = true"> Request </button>
          </td>
        </tr>
      </table>
    </div>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal || showModalSet || showModalRequest || showModalRequestMsg"
        @click="showModal = false; showModalSet = false; showModalRequest = false; showModalRequestMsg = false;"></div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
          <table style="margin-bottom:20px;">
            <tr>
              <th class="item1" align="left">Date</th>
              <td rowspan="9" width="10px"></td>
              <td class="item2" align="left">{{ arena.date }}</td>
              <td rowspan="9" width="10px"></td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Time</th>
              <td class="item2" align="left">{{ arena.time }}</td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Sport</th>
              <td class="item2" align="left">{{ arena.sport }}</td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Opponents</th>
              <td class="item2" align="left">{{ arena.ops }}</td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Available arenas</th>
                <select name="arena" id="arena" class="dropdownMenu"  align="left" @input="enableButton">
                  <option value="" disabled selected>select arena</option>
                  <option value="Stark arena"> Stark arena </option>
                  <option value="Pionir hala"> Pionir hala </option>
                  <option value="Tasmajdan"> Tasmajdan </option>
                  <option value="Sportski centar Olimp"> Sportski centar Olimp </option>
                </select>
            </tr>
          </table>

          <hr style="height:10pt; visibility:hidden;" />
          <button class="button" id="set-button"  @click="showModal = false; showModalSet = true;" disabled  > Set  </button>
          <button class="button" @click="showModal = false"> Close </button>       
      </div>

      <div class="modal" v-if="showModalSet">
        <h1>Are you sure?</h1>
        <hr style="height:10pt; visibility:hidden;" />
        <button class="button" @click="showModalSet = false; $emit('del-arena', arena.id); arena.completed = true; "> Yes </button>
        <button class="button" @click="showModalSet = false"> No </button>
      </div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModalRequest">
          <table style="margin-bottom:20px;">
            <tr>
              <th class="item1" align="left">Date</th>
              <td rowspan="7" width="10px"></td>
              <td class="item2" align="left">{{ arena.date }}</td>
              <td rowspan="7" width="10px"></td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Time</th>
              <td class="item2" align="left">{{ arena.time }}</td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Sport</th>
              <td class="item2" align="left">{{ arena.sport }}</td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Opponents</th>
              <td class="item2" align="left">{{ arena.ops }}</td>
            </tr>
          </table>

          <hr style="height:10pt; visibility:hidden;" />
          <button class="button"  @click=" showModalRequest = false; showModalRequestMsg = true; " > Request </button>
          <button class="button" @click="showModalRequest = false"> Close </button>
      </div>

      <div class="modal" v-if="showModalRequestMsg">
        <h1>Your request has been sent!</h1>
        <hr style="height:10pt; visibility:hidden;" />
        <button class="button" @click="showModalRequestMsg = false; $emit('del-arena', arena.id); arena.completed = true; " > Ok </button>
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
    enableButton() {  document.getElementById("set-button").disabled = false; }
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
  font-size     : 1rem;
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
  min-width     : 150px;
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
  width         : 400px;
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
  width         : 400px;
  padding       : 10px 10px;
  font-size     : 14px;
  color         : #2c2c2c;
  margin        : 0px 0 0px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}

.dropdownMenu:focus { outline: none; }

</style>
