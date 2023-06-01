import getters from '@/vuex/getters';
import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS, CHANGE_ACTIVE_LIST } from './mutation_types';

export default {
  [CHANGE_TITLE](state, data) {
    getters.getListById(state)(data.id).title = data.title;
  },
  [POPULATE_SHOPPING_LISTS](state, lists) {
    state.shoppingLists = lists.map((list, index) => ({
      ...list,
      active: index === 0,
    }));
  },
  [CHANGE_ACTIVE_LIST](state, id) {
    state.shoppingLists = state.shoppingLists.map((list) => ({
      ...list,
      active: id === list.id,
    }));
  },
};
