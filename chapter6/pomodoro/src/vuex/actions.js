import { START, PAUSE, STOP, FETCH_KITTEN, TOGGLE_SOUND } from '@/vuex/mutation_types';

export default {
  start: ({ commit }) => commit(START),
  pause: ({ commit }) => commit(PAUSE),
  stop: ({ commit }) => commit(STOP),
  fetchKitten: ({ commit }) => commit(FETCH_KITTEN),
  toggleSound: ({ commit }) => commit(TOGGLE_SOUND),
};
