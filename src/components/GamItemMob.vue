<template>
  <div class="games-item" >
    <table width="100%">
      <tr align="left">
        <td width="20"></td>
        <td width="20%" style="font-size:18px; font-weight:bold;" align="left"> {{game.date}} </td>
        <td width="20"></td>
        <td width="60%" style="font-size:18px; font-weight:bold;" align="left"> {{game.time}} </td>
        <td width="20%" style="font-size:18px; font-weight:bold;" align="right"> {{game.ops}} </td>
      </tr>
      <tr height="20px"></tr>
      <tr>
        <td width="20"></td>
        <td width="100%" colspan="4" align="left"> {{game.location}} </td>
      </tr>
      <tr height="5px"></tr>
      <tr>
        <td width="20"></td>
        <td width="100%" colspan="4" align="left"> {{game.address}} </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "games-item",
  props: ["game"]
};
</script>

<style scoped>
.games-item {
  background    : white;
  font-family   : Roboto, sans-serif;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 100%;
  padding       : 15px 15px;
  font-size     : 16px;
  color         : #2c2c2c;
  margin        : 10px 0 10px 0;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px;
}
</style>
