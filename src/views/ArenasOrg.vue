<template>
  <div id="arenas-org">
    <NavOrg v-if="!mobileView" />
    <NavOrgMob  v-if="mobileView" />
    <ArenasHeader v-if="!mobileView" />
    <Arenas v-bind:arenas="arenas" v-on:del-arena="deleteArenas"  />
  </div>
</template>

<script>
import NavOrg from "../components/NavOrg.vue";
import NavOrgMob from "../components/NavOrgMob.vue";
import Arenas from "../components/Arenas.vue";
import ArenasHeader from "../components/ArenasHeader.vue";
import arenas from "../data/arenas.js";

export default {
  name: "arenas-org",

  components: {
    NavOrg,
    NavOrgMob,
    Arenas,
    ArenasHeader
  },

  data() {
    return {
      arenas: arenas,
      mobileView: false,
    };
  },

  methods: {
    deleteArenas(id) {
      this.arenas = this.arenas.filter(arena => arena.id != id);
    },
    handleView() {
      this.mobileView = window.innerWidth <= 768;
    }
  },

  created() {
    this.arenas = this.arenas.filter(arena => arena.completed == false);

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
