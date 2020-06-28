<template>
  <div id="home-org">
    <NavOrg  v-if="!mobileView" />
    <NavOrgMob  v-if="mobileView" />
    <RequestsHeader v-if="!mobileView" />
    <Requests v-bind:requests="requests" v-on:sort-request="sortRequests" />
  </div>
</template>

<script>
import NavOrg from "../components/NavOrg.vue";
import NavOrgMob from "../components/NavOrgMob.vue";
import Requests from "../components/Requests.vue";
import RequestsHeader from "../components/RequestsHeader.vue";
import requests from "../data/requests.js";

export default {
  name: "home-org",

  components: {
    NavOrg,
    NavOrgMob,
    Requests,
    RequestsHeader
  },

  data() {
    return {
      requests: requests,
      mobileView: false,
    };
  },

  methods: {
    sortRequests(id) {
      var completed = this.requests.filter(request => request.id == id);
      this.requests = this.requests.filter(request => request.id != id);
      this.requests = this.requests.concat(completed);
    },
    handleView() {
      this.mobileView = window.innerWidth <= 768;
    }
  },

  created() {
      var completed = this.requests.filter(request => request.pending == false);
      this.requests = this.requests.filter(request => request.pending == true);
      this.requests = this.requests.concat(completed);

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
