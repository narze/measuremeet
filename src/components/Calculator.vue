<template>
  <div class="calculator">
    <button class="btn add">+</button>
    <button class="btn remove">-</button>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.calculator  {
  @apply mx-4 my-4;
}

.btn {
  @apply font-bold py-2 px-4 mx-1 rounded bg-blue-500 text-white;
}

.btn:hover {
  @apply bg-blue-700;
}

</style>
