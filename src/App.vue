<template>
  <div id="app">
    <layout>
    </layout>
  </div>
</template>

<script>
import Layout from "./components/layout/Layout";

export default {
  components: {Layout},
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
