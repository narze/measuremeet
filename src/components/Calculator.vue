<template>
  <div class="calculator">
    <span class="title">Number of people : </span>
    <button class="btn add" @click="add">+</button>
    <span class="people-count">{{ peopleCount }}</span>
    <button class="btn remove" @click="remove">-</button>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {},
  data() {
    return {
      peopleCount: 2,
    };
  },
  methods: {
    add() {
      this.peopleCount += 1;
    },
    remove() {
      this.peopleCount = Math.max(2, this.peopleCount - 1);
    },
  },
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

.people-count {
  @apply mx-2
}

.title {
  @apply text-lg
}

</style>
