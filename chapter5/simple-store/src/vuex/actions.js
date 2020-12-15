import { CHANGE_MSG, INCREMENT_COUNTER } from '@/vuex/mutation_types';

export default {
  handleMessageInputChanges({ commit }, event) {
    commit(CHANGE_MSG, event.target.value)

    if (event.keyCode === 13) {
      commit(INCREMENT_COUNTER);
    }
  }
};
