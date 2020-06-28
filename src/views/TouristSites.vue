<template>
  <div id="tourist-sites">
    <NavStud v-if="!mobileView" />
    <NavStudMob v-if="mobileView" />
    <Sites v-bind:sites="sites" class="blog" v-on:sort="sortSites" />
  </div>
</template>

<script>
import NavStud from "../components/NavStud.vue";
import NavStudMob from "../components/NavStudMob.vue";

import Sites from "../components/Sites.vue";
import sites from "../data/sites.js";

export default {
  name: "tourist-sites",
  components: {
    NavStud,
    NavStudMob,
    Sites
  },
  data() {
    return {
      sites:sites,
      mobileView: false
    }
  },

  methods: {
    sortSites() {
      var completed = this.sites.filter(site => site.myLike == false);
      this.sites = this.sites.filter(site => site.myLike == true);
      this.sites = this.sites.concat(completed);
    },

    handleView() {this.mobileView = window.innerWidth <= 800; }
  },

  created() {
    var completed = this.sites.filter(site => site.myLike == false);
    this.sites = this.sites.filter(site => site.myLike == true);
    this.sites = this.sites.concat(completed);

    this.handleView();
    window.addEventListener('resize', this.handleView);
  },

  updated() {
    this.handleView();
    window.addEventListener('resize', this.handleView);

  },

 
};
</script>

<style scoped>


.blog {
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  margin-left:10px;
  margin-right:10px;
  /* max-height: 600px;
  overflow-y: scroll; */
  overflow-x: hidden;
  /* transition: 1s transform cubic-bezier(0,.2,.22,.99); */

}

 ::-webkit-scrollbar {
    /* width: 20px;   */
    /* background: transparent;   */
    width: 5px;
    height: 8px;
    background-color: #aaa; /* or add it to the track */
}
::-webkit-scrollbar-thumb {
    background: #2c2c2c; 
}
 

</style>