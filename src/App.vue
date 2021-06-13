<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import socket from '/src/real-time-client'
import { getData } from '/src/api/auth'

export default {
  name: 'App',
  components: {},
  async created() {

    try {
      let { data } = await getData();
      socket.init(data.realTimeServerUrl, data.realTimeToken);
    } catch (e) {
      console.log(e);
    }

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
