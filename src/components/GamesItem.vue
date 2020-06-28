<template>
    <div class="games-item" >
      <table>
        <tr align="left">
        <td width="20"></td>
        <td width="17%"> {{game.date}} </td>
        <td width="13%"> {{game.time}} </td>
        <td width="30%"> {{game.location}} </td>
        <td width="30%"> {{game.address}} </td>
        <td width="10%"> {{game.ops}} </td>
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
