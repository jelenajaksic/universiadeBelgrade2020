<template>
  <div>
    <div v-bind:key="game.id" v-for="game in games">
      <GamesItem v-bind:game="game" v-if="!mobileView"/>
      <GamItemMob v-bind:game="game" v-if="mobileView"/>
    </div>
  </div>
</template>

<script>
import GamesItem from "../components/GamesItem.vue";
import GamItemMob from "../components/GamItemMob.vue";

export default {
  name: "games",
  components: {
    GamesItem,
    GamItemMob
  },

  props: ["games"],

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
