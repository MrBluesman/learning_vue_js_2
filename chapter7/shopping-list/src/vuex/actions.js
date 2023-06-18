import getters from '@/vuex/getters';
import {
  ADD_SHOPPING_LIST,
  CHANGE_ACTIVE_LIST,
  CHANGE_TITLE, DELETE_SHOPPING_LIST,
  POPULATE_SHOPPING_LISTS,
} from './mutation_types';
import api from '../api';

export default {
  changeTitle: ({ commit, dispatch }, data) => {
    commit(CHANGE_TITLE, data);
    return dispatch('updateList', data.id);
  },
  populateShoppingLists: ({ commit }) => api.fetchShoppingLists()
    .then(({ data }) => {
      commit(POPULATE_SHOPPING_LISTS, data);
    }),
  changeActiveList: ({ commit }, id) => {
    commit(CHANGE_ACTIVE_LIST, id);
  },
  updateList: ({ state }, id) => {
    const shoppingList = getters.getListById(state)(id);

    return api.updateShoppingList(shoppingList);
  },
  createShoppingList: ({ dispatch, commit, state }, shoppingList) => api.addNewShoppingList(
    shoppingList,
  )
    .then(() => {
      dispatch('populateShoppingLists');
    }, () => {
      commit(ADD_SHOPPING_LIST, shoppingList);
      dispatch('changeActiveList', state.shoppingLists.length - 1);
    }),
  deleteShoppingList: ({ dispatch, commit, state }, id) => api.deleteShoppingList(id)
    .then(() => {
      dispatch('populateShoppingLists');
    }, () => {
      commit(DELETE_SHOPPING_LIST, id);

      if (state.shoppingLists.length > 0) {
        dispatch('changeActiveList', 0);
      }
    }),
};
