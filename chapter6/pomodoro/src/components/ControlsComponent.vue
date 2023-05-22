<template>
  <div class="btn-group">
    <button class="btn btn-outline-secondary mr-1 ml-2"
            :disabled="isStarted && !isPaused"
            @click="start">
      <font-awesome-icon icon="play"/>
    </button>
    <button class="btn btn-outline-secondary mr-1"
            :disabled="!isStarted || isPaused"
            @click="pause">
      <font-awesome-icon icon="pause"/>
    </button>
    <button class="btn btn-outline-secondary"
            :disabled="!isStarted"
            @click="stop">
      <font-awesome-icon icon="stop"/>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ControlsComponent',
  computed: {
    ...mapGetters([
      'isStarted',
      'isPaused',
      'isStopped'
    ]),
  },
  methods: mapActions([
    'start',
    'pause',
    'stop',
  ]),
};
</script>

<style scoped>
button:disabled {
  cursor: default;
}

button:disabled i {
  color: gray;
}
</style>
