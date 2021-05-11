import { START, PAUSE, STOP } from '@/vuex/mutation_types';

export default {
  start: ({ commit }) => commit(START),
  pause: ({ commit }) => commit(PAUSE),
  stop: ({ commit }) => commit(STOP),
}