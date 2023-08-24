<template>
  <div class="btn-group controls">
    <button class="btn btn-outline-secondary mr-1 ml-2"
            :disabled="isStarted && !isPaused"
            @click="start"
            title="start">
      <font-awesome-icon icon="play"/>
    </button>
    <button class="btn btn-outline-secondary mr-1"
            :disabled="!isStarted || isPaused"
            @click="pause"
            title="pause">
      <font-awesome-icon icon="pause"/>
    </button>
    <button class="btn btn-outline-secondary"
            :disabled="!isStarted"
            @click="stop"
            title="stop">
      <font-awesome-icon icon="stop"/>
    </button>
    <div v-show="isStarted && !isPaused"
         class="toggle-volume"
         @click="toggleSound">
      <font-awesome-icon v-if="isSoundEnabled"
                         icon="volume-up"/>
      <font-awesome-icon v-if="!isSoundEnabled"
                         icon="volume-mute"/>
    </div>
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
      'isStopped',
      'isWorking',
      'isSoundEnabled',
    ]),
  },
  methods: mapActions([
    'start',
    'pause',
    'stop',
    'toggleSound',
  ]),
};
</script>

<style scoped>
.controls {
  display: contents;
}

button:disabled {
  cursor: default;
}

button:disabled i {
  color: gray;
}

.toggle-volume {
  float: right;
  cursor: pointer;
}
</style>
