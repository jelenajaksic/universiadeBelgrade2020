<template>
  <div>
    <div class="request-item" v-bind:class="{ 'is-complete': request.pending }" >
      <table>
        <tr align="left">
          <td width="20"></td>
          <td style=" font-size:16px; font-weight:bold;" align="left" colspan="3" >  {{ request.name }}  </td>
        </tr>
        <tr height="5px"></tr>
        <tr>
          <td width="20"  ></td>
           <td width="20%" v-if="request.type === 'Accomodation'" align="left" >
            <font-awesome-icon  icon="bed" class="icon" style="font-size:20px;"/>
          </td>
          <td width="20%" v-else align="left">
            <font-awesome-icon icon="utensils" class="icon" style="font-size:20px;"/>
          </td>      
          <td width="100%"  align="right" v-if="request.pending" >
            <button class="btn btn-success" @click="showModal = true">  Review </button>
          </td>
          <td width="100%" align="right" style="min-width:110px;" v-else > Completed </td>
        </tr>
      </table>
    </div>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal || showModalAcccept || showModalDismiss"
        @click="showModal = false; showModalAcccept = false; showModalDismiss = false;" ></div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
          <table style="margin-bottom:20px;min-width:250px;">
            <tr> <th class="item1" align="left">Name</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ request.name }}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Current facility</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ request.current }}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Wanted facility</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ request.wanted }}</td> </tr>
            <tr  height="20px"></tr>

            <tr> <th class="item1" align="left">Message</th> </tr>
            <tr height="5px"></tr>
            <tr> <td class="item2" align="left">{{ request.message }}</td> </tr>
            <tr  height="20px"></tr>
          </table>

          <button class="button"  @click=" showModal = false; showModalAcccept = true;" style="margin-bottom:10px;" > Approve </button>
          <button class="button" @click="  showModal = false;  showModalDismiss = true;" style="margin-bottom:10px;" >  Dismiss </button>
          <button class="button" @click="  showModal = false" style="margin-bottom:10px;" >  Close </button>
      </div>

      <div class="modal" v-if="showModalAcccept">
        <h1 style="min-width:200px;">Are you sure you want to approve this request?</h1>
        <hr style="height:10pt; visibility:hidden;" />
        <button class="button" @click="showModalAcccept = false; markComplete();$emit('sort-request', request.id);" > Yes </button>
        <button class="button" @click="showModalAcccept = false"> No </button>
      </div>

      <div class="modal" v-if="showModalDismiss">
        <h1 style="min-width:200px;">Are you sure you want to dismiss this request?</h1>
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
    markComplete() { this.request.pending = false;}
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
  font-size     : 14px;
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
  width         : 80%;
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

</style>
