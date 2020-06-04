<template>
  <div class="calculator">
    <div class="row">
      <span class="title">Number of people : </span>
      <button class="btn add" @click="add">+</button>
      <span class="people-count">{{ peopleCount }}</span>
      <button class="btn remove" @click="remove">-</button>
    </div>
    <div class="row">
      <span class="title">Meeting duration : </span>
      <button class="btn add-duration" @click="addDuration">+</button>
      <span class="meeting-duration">{{ meetingDuration }} Minutes</span>
      <button class="btn remove-duration" @click="removeDuration">-</button>
    </div>
    <div class="row">
      <p class="result" v-if="showResult">
        This meeting will take {{ result }} man-minute of work, be quick!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {},
  data() {
    return {
      peopleCount: 2,
      meetingDuration: 0,
    };
  },
  methods: {
    add() {
      this.peopleCount += 1;
    },
    remove() {
      this.peopleCount = Math.max(2, this.peopleCount - 1);
    },
    addDuration() {
      this.meetingDuration += 5;
    },
    removeDuration() {
      this.meetingDuration = Math.max(0, this.meetingDuration - 5);
    },
  },
  computed: {
    result() {
      return this.peopleCount * this.meetingDuration;
    },
    showResult() {
      return this.result !== 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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

.result {
  @apply mt-8 text-xl font-bold py-4 px-6 rounded bg-red-500 text-white;
}

.row {
  @apply my-2
}

.title {
  @apply text-lg
}

</style>
