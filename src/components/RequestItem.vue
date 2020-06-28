<template>
  <div>
    <div class="request-item" v-bind:class="{ 'is-complete': request.pending }">
      <table>
        <tr align="left">
          <td width="20"></td>
          <td width="20%"> {{ request.name }} </td>

          <td width="10%" v-if="request.type === 'Accomodation'" >
            <font-awesome-icon  icon="bed" class="icon" style="font-size:26px;"/>
          </td>
          <td width="10%" v-else>
            <font-awesome-icon icon="utensils" class="icon" style="font-size:26px;"/>
          </td>

          <td width="30%"> {{ request.current }} </td>

          <td width="30%"> {{ request.wanted }} </td>

          <td width="10%"  align="center" v-if="request.pending">
            <button class="btn btn-success" @click="showModal = true"> Review </button>
          </td>
          <td width="10%" align="center" style="min-width:110px;" v-else> Completed </td>
        </tr>
      </table>
    </div>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal || showModalAcccept || showModalDismiss" 
          @click="showModal = false; showModalAcccept = false; showModalDismiss = false;" ></div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
          <table style="margin-bottom:20px;">
            <tr>
              <th class="item1" align="left">Name</th>
              <td rowspan="7" width="10px"></td>
              <td class="item2" align="left">{{ request.name }}</td>
              <td rowspan="7" width="10px"></td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Current facility</th>
              <td class="item2" align="left">{{ request.current }}</td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Wanted facility</th>
              <td class="item2" align="left">{{ request.wanted }}</td>
            </tr>
            <tr colspan="2" height="10px"></tr>
            <tr>
              <th class="item1" align="left">Message</th>
              <td class="item2" align="left">{{ request.message }}</td>
            </tr>
          </table>

          <hr style="height:10pt; visibility:hidden;" />
          <button class="button"  @click=" showModal = false; showModalAcccept = true;" > Approve </button>
          <button class="button" @click="  showModal = false;  showModalDismiss = true;" > Dismiss </button>
          <button class="button" @click="  showModal = false" > Close </button>
        
      </div>

      <div class="modal" v-if="showModalAcccept">
        <h1>Are you sure you want to approve this request?</h1>
        <hr style="height:10pt; visibility:hidden;" />
        <button class="button" @click="showModalAcccept = false; markComplete(); $emit('sort-request', request.id); "> Yes </button>
        <button class="button" @click="showModalAcccept = false"> No </button>
      </div>

      <div class="modal" v-if="showModalDismiss">
        <h1>Are you sure you want to dismiss this request?</h1>
        <hr style="height:10pt; visibility:hidden;" />
        <button class="button" @click="showModalDismiss = false; markComplete(); $emit('sort-request', request.id);" > Yes </button>
        <button class="button" @click="showModalDismiss = false"> No </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "request-item",

  props: ["request"],

  methods: {
    markComplete() { this.request.pending = false; }
  },

  data() {
    return {
      showModal: false,
      showModalAcccept: false,
      showModalDismiss: false
    };
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
  width         : 150px;
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
  width         : 500px;
  min-width     : 300px;
  padding       : 10px 10px;
  font-size     : 14px;
  color         : #2c2c2c;
  margin        : 10px 0 10px 0px;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}
</style>
