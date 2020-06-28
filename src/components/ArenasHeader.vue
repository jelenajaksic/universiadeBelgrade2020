<template>
  <div class="arenas-header">
    <table>
      <tr align="left">
        <td width="20"></td>
        <td width="20%">Date</td>
        <td width="15%">Time</td>
        <td width="20%">Sport</td>
        <td width="20%">Opponents</td>
        <td width="15%">Available arenas</td>
        <td width="10%" align="center" style="min-width:110px;"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "arenas-header"
};
</script>

<style scoped>
.arenas-header {
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
