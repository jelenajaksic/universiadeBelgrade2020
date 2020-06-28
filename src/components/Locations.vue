<template>
  <div>
    <div v-bind:key="location.id" v-for="location in locations">
      <LocationsItem v-if="!mobileView" v-bind:location="location" v-on:set-id="$emit('set-id', location.id-1)"/>
      <LocItemMob  v-if="mobileView" v-bind:location="location" v-on:set-id="$emit('set-id', location.id-1)"/>
    </div>
  </div>
</template>

<script>
import LocationsItem from "../components/LocationsItem.vue";
import LocItemMob from "../components/LocItemMob.vue";

export default {
  name: "locations",
  components: {
    LocationsItem,
    LocItemMob
  },
  props: ["locations"],
  data() {
    return {
      mobileView: false
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 800;
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
