import { expect } from 'chai';
import mutations from '@/vuex/mutations';
import { ADD_SHOPPING_LIST } from '@/vuex/mutation_types';

describe('mutations.js', () => {
  let state;

  beforeEach(() => {
    state = {
      shoppingLists: [],
    };
  });

  describe('ADD_SHOPPING_LIST', () => {
    it('should add item to the shopping list array and increase its length', () => {
      // call the add_shopping_list mutation
      mutations[ADD_SHOPPING_LIST](state, { id: '1' });

      // check that the array now equals array with new object
      expect(state.shoppingLists)
        .to
        .eql([{ id: '1' }]);

      // check that array's length had increased
      expect(state.shoppingLists)
        .to
        .have
        .length(1);
    });

    it('should not add the item if item is empty', () => {
      mutations[ADD_SHOPPING_LIST](state);
      expect(state.shoppingLists)
        .to
        .have
        .length(0);
    });
  });
});
