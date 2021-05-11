<template>
  <div>
    <h3>{{ isWorking ? workingTitle : restingTitle }}</h3>
  </div>
</template>

<script>
export default {
  name: 'StateTitleComponent',
  data() {
    return {
      workingTitle: 'Work!',
      restingTitle: 'Rest!'
    };
  },
  props: {
    isWorking: {
      type: Boolean
    },
  },
};
</script>

<style scoped>

</style>
