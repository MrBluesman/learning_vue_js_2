import getters from '@/vuex/getters';
import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS } from './mutation_types';

export default {
  [CHANGE_TITLE](state, data) {
    getters.getListById(state, data.id).title = data.title;
  },
  [POPULATE_SHOPPING_LISTS](state, lists) {
    state.shoppingLists = lists;
  },
};
