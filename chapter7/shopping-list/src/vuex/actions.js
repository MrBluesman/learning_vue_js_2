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
  // eslint-disable-next-line max-len
  createShoppingList: ({ dispatch, commit, state }, shoppingList) => new Promise((resolve, reject) => {
    api.addNewShoppingList(
      shoppingList,
    )
      .then((data) => {
        resolve(data);
        return dispatch('populateShoppingLists');
      }, (e) => {
        commit(ADD_SHOPPING_LIST, shoppingList);
        reject(e);
        dispatch('changeActiveList', state.shoppingLists.length - 1);
      });
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
