<template>
  <div class="card bg-light">
    <div class="card-body">
      <span>{{ min | leftPad }}:{{ sec | leftPad }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CountdownComponent',
  computed: {
    ...mapGetters({
      min: 'getMinutes',
      sec: 'getSeconds',
    }),
  },
};
</script>

<style scoped>

</style>
