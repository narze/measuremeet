<template>
  <div class="measure-meet">
    <h1>MeasureMeet</h1>
    <p>
      Measure meeting time so you won't waste it
    </p>

    <Calculator />
  </div>
</template>

<script>
import Calculator from './Calculator.vue';

export default {
  name: 'MeasureMeet',
  props: {
    msg: String,
  },
  components: {
    Calculator,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
  font-size: 2.5em;
}
</style>
