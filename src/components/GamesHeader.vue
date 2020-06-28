<template>
  <div>
    <div class="games-header">
      <table>
        <tr align="left">
          <td width="20"></td>
          <td width="17%">Date</td>
          <td width="13%">Time</td>
          <td width="30%">Loacation</td>
          <td width="30%">Address</td>
          <td width="10%">Opponent</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "games-header"
};
</script>

<style scoped>
.games-header {
  background    : #979797;
  font-family   : Roboto, sans-serif;
  filter        : drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
  width         : 100%;
  padding       : 15px 15px;
  font-size     : 16px;
  color         : white;
  margin        : 10px 0 10px 0;
  box-sizing    : border-box;
  border        : 0px;
  border-radius : 4px; 
}
</style>
