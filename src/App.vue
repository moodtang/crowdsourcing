<template>
  <div id="app">
    <!--<layout>-->
    <!--</layout>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from "./components/layout/Layout";
import Login from "./components/view/Login"
export default {
  components: {
    Login,
    Layout},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
