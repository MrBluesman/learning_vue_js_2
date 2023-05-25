import Vue from 'vue';
import { START, PAUSE, STOP, FETCH_KITTEN } from '@/vuex/mutation_types';
import { KITTEN_TIME, RESTING_TIME, WORKING_TIME } from '@/config';

function togglePomodoro(state, toggle = false) {
  toggle = toggle || !state.isWorking;
  state.isWorking = toggle;

  if (state.isWorking && !state.paused && !state.stopped) {
    Vue.noise.start();
  } else {
    Vue.noise.pause();
  }

  state.counter = state.isWorking ? WORKING_TIME : RESTING_TIME;
}

function tick(state) {
  if (state.counter === 0) {
    togglePomodoro(state);
  }

  if (state.counter % KITTEN_TIME === 0 && !state.isWorking) {
    fetchKitten(state);
  }

  state.counter--;
  state.timestamp = new Date().getTime();
}

function fetchKitten(state) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
    'GET',
    `https://api.thecatapi.com/v1/images/search?size=med&ts=${state.timestamp}`,
    false);
  xmlHttp.send(null);
  state.catImgSrc = JSON.parse(xmlHttp.response)[0].url;
}

export default {
  [START](state) {
    state.started = true;
    state.paused = false;
    state.stopped = false;
    state.interval = setInterval(() => tick(state), 1000);

    if (state.isWorking) {
      Vue.noise.start();
    }
  },
  [PAUSE](state) {
    state.started = true;
    state.paused = true;
    state.stopped = false;

    clearInterval(state.interval);
    Vue.noise.pause();
  },
  [STOP](state) {
    state.started = false;
    state.paused = false;
    state.stopped = true;

    clearInterval(state.interval);
    togglePomodoro(state, true);
    Vue.noise.stop();
  },
  [FETCH_KITTEN](state) {
    fetchKitten(state);
  }
};
