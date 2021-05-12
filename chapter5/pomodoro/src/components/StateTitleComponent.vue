<template>
  <div>
    <h3>{{ isWorking ? workingTitle : restingTitle }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'StateTitleComponent',
  data() {
    return {
      workingTitle: 'Work!',
      restingTitle: 'Rest!'
    };
  },
  computed: mapGetters(['isWorking']),
};
</script>

<style scoped>

</style>
