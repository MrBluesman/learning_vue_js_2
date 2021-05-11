import { START, PAUSE, STOP } from '@/vuex/mutation_types';

export default {
  [START](state) {
    state.started = true;
    state.paused = false;
    state.stopped = false;
  },
  [PAUSE](state) {
    state.started = true;
    state.paused = true;
    state.stopped = false;
  },
  [STOP](state) {
    state.started = false;
    state.paused = false;
    state.stopped = true;
  }
}