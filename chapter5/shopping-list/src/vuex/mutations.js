import CHANGE_TITLE from './mutation_types';

const findById = (state, id) => state.shoppingLists.find((list) => list.id === id);

export default {
  [CHANGE_TITLE](state, data) {
    findById(state, data.id).title = data.title;
  },
};
