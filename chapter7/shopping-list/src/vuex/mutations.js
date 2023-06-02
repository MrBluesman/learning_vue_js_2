import getters from '@/vuex/getters';
import {
  CHANGE_TITLE,
  POPULATE_SHOPPING_LISTS,
  CHANGE_ACTIVE_LIST,
  ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST,
} from './mutation_types';

export default {
  [CHANGE_TITLE](state, data) {
    getters.getListById(state)(data.id).title = data.title;
  },
  [CHANGE_ACTIVE_LIST](state, id) {
    state.shoppingLists = state.shoppingLists.map((list) => ({
      ...list,
      active: id === list.id,
    }));
  },
  [ADD_SHOPPING_LIST](state, newList) {
    if (typeof newList === 'object') {
      state.shoppingLists.map((list) => ({ ...list, active: false }));
      state.shoppingLists.push({
        ...newList,
        id: newList.id !== undefined ? newList.id : state.shoppingLists.length,
      });
    }
  },
  [DELETE_SHOPPING_LIST](state, id) {
    state.shoppingLists = state.shoppingLists.filter((list) => list.id !== id);
  },
  [POPULATE_SHOPPING_LISTS](state, lists) {
    state.shoppingLists = lists.map((list, index) => ({
      ...list,
      active: index === 0,
    }));
  },
};
