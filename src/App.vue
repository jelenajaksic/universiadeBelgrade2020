<template>
 <div id="app">
   <router-view/>
 </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
#app {
  font-family: Roboto, Bebas Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
 button{
  background: #ed4144;
  font-family: Roboto, sans-serif;
  width: 100px;
  padding: 10px 10px;
  font-size: 14px;
  color: white;
  margin: 0px 5px 0px 5px;
  /* box-sizing: border-box; */
  border: 0px;
  border-radius: 4px;

 }

 button:disabled {
   opacity: 80%;
 }

  button:disabled:hover {
   filter: none;
 }

 button:hover {
   filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.2));
   cursor: pointer;
 }

 button:focus { outline:none; }

input:focus { outline:none; }


 input{
    background: white;
    font-family: Roboto, sans-serif;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));
    width: 60vw;
    min-width:200px;
    max-width: 300px;
    height: auto;
    padding: 10px 10px;
    font-size: 14px;
    color: #2c2c2c;
    margin: 5px 0 10px 0px;
    border: 0px;
    border-radius: 4px;
 }

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }


 h1 {
   font-size: 16px;
 }

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;

 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: auto;
 background-color: #FFF;
 border-radius: 16px;
 
 /* padding: 25px 40px 25px 40px; */
 padding: 20px 5vw 20px 5vw;

 font-style: none;
 color: #2c3e50;
 font-family: Roboto;

 overflow-y: scroll; 
 max-height: 500px;
 min-width: 250px;
 /* max-width:90%; */

}
.modal::-webkit-scrollbar {
    width: 0px;  
    background: transparent;  
}

::-webkit-scrollbar {
    width: 0px;  
    background: transparent; 
     
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}


</style>
