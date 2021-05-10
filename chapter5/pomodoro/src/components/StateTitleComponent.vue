<template>
  <div>
    <h3>{{ isWorking ? workingTitle : restingTitle }}</h3>
    <!--    <p>{{ Math.pow(5,2) }}</p>-->
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
  props: ['isWorking']
};
</script>

<style scoped>

</style>
