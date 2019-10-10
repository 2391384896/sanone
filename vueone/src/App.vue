<template>
  <div id="app">
    <Lheader id="head"></Lheader>
    <router-view/>
    <Lfooter id="foot"></Lfooter>
  </div>
</template>

<script>
import Lheader from "./components/Lheader";
import Lfooter from "./components/Lfooter";
export default {
  name: 'App',
  components: {Lfooter, Lheader}
}
</script>

<style>
#head,#foot{
 height: 20%;
  width: 100%;
  background: cyan;
}

html,body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
