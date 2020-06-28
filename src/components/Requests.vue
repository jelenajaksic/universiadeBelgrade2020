<template>
  <div>
    <div v-bind:key="request.id" v-for="request in requests">
      <RequestItem v-if="!mobileView" v-bind:request="request" v-on:sort-request="$emit('sort-request', request.id)" />
      <ReqItemMob v-if="mobileView" v-bind:request="request" v-on:sort-request="$emit('sort-request', request.id)" />
    </div>
  </div>
</template>

<script>
import RequestItem from "../components/RequestItem.vue";
import ReqItemMob from "../components/ReqItemMob.vue";

export default {
  name: "requests",

  components: {
    RequestItem,
    ReqItemMob,
  },

  props: ["requests"],

  data() {
    return {
      mobileView: false
    }
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 768;
    }
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },

  updated() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
};
</script>

<style scoped></style>
