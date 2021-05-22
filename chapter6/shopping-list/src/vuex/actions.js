import getters from '@/vuex/getters';
import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS } from './mutation_types';
import api from '../api';

export default {
  changeTitle: ({ commit, dispatch }, data) => {
    commit(CHANGE_TITLE, data);
    dispatch('updateList', data.id);
  },
  populateShoppingLists: ({ commit }) => {
    api.fetchShoppingLists()
      .then(({ data }) => {
        commit(POPULATE_SHOPPING_LISTS, data);
      });
  },
  updateList: ({ state }, id) => {
    const shoppingList = getters.getListById(state, id);
    api.updateShoppingList(shoppingList);
  },
};
