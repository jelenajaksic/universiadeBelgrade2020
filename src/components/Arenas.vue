<template>
  <div>
    <div v-bind:key="arena.id" v-for="arena in arenas">
      <ArenasItem v-if="!mobileView" v-bind:arena="arena" v-on:del-arena="$emit('del-arena', arena.id)" />
      <AreItemMob v-if="mobileView" v-bind:arena="arena" v-on:del-arena="$emit('del-arena', arena.id)" />
    </div>
  </div>
</template>

<script>
import ArenasItem from "../components/ArenasItem.vue";
import AreItemMob from "../components/AreItemMob.vue";

export default {
  name: "arenas",
  components: {
    ArenasItem,
    AreItemMob
  },

  props: ["arenas"],

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
