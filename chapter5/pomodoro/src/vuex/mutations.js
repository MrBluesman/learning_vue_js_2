import { START, PAUSE, STOP } from '@/vuex/mutation_types';
import { RESTING_TIME, WORKING_TIME } from '@/config';

function togglePomodoro(state, toggle = false) {
  toggle = toggle || !state.isWorking;
  state.isWorking = toggle;
  state.counter = state.isWorking ? WORKING_TIME : RESTING_TIME;
}

function tick(state) {
  if (state.counter === 0) {
    togglePomodoro(state);
  }

  state.counter--;
}

export default {
  [START](state) {
    state.started = true;
    state.paused = false;
    state.stopped = false;
    state.interval = setInterval(() => tick(state), 1000);
  },
  [PAUSE](state) {
    state.started = true;
    state.paused = true;
    state.stopped = false;
    clearInterval(state.interval);
  },
  [STOP](state) {
    state.started = false;
    state.paused = false;
    state.stopped = true;
    clearInterval(state.interval);
    togglePomodoro(state, true);
  }
}
