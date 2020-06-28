<template>
  <div id="sites">
      <div v-bind:key="site.id" v-for="site in sites">
        <SitesItem :site="site" :index="site.id" v-on:sort="$emit('sort')"/>
      </div>
   </div>
</template>

<script>
import SitesItem from "../components/SitesItem.vue";
export default {
  name: "sites",
  components: {
    SitesItem
  },
  props: ["sites"]
};
</script>

<style scoped>

</style>
