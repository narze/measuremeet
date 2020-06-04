<template>
  <div id="app">
    <MeasureMeet />
  </div>
</template>

<script>
import MeasureMeet from './components/MeasureMeet.vue';

export default {
  name: 'App',
  components: {
    MeasureMeet,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
