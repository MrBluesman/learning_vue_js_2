import { expect } from 'chai';
import mutations from '@/vuex/mutations';
import {
  ADD_SHOPPING_LIST,
  CHANGE_TITLE,
  DELETE_SHOPPING_LIST,
  POPULATE_SHOPPING_LISTS,
} from '@/vuex/mutation_types';

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

  describe('DELETE_SHOPPING_LIST', () => {
    beforeEach(() => {
      state = {
        shoppingLists: [{ id: 1 }, { id: '1' }],
      };
    });

    it('should remove item from the shopping list array', () => {
      mutations[DELETE_SHOPPING_LIST](state, 1);
      expect(state.shoppingLists)
        .to
        .eql([{ id: '1' }]);
      expect(state.shoppingLists)
        .to
        .have
        .length(1);
    });

    it('should not remove item from the shopping list array when given list is not found', () => {
      mutations[DELETE_SHOPPING_LIST](state, 2);
      expect(state.shoppingLists)
        .to
        .eql(state.shoppingLists);
      expect(state.shoppingLists)
        .to
        .have
        .length(2);
    });
  });

  describe('POPULATE_SHOPPING_LISTS', () => {
    beforeEach(() => {
      state = {
        shoppingLists: [{ id: 1 }, { id: '1' }],
      };
    });

    it('should assign to the value of shopping lists the given property', () => {
      const newLists = [{ id: 2 }];
      mutations[POPULATE_SHOPPING_LISTS](state, newLists);
      expect(state.shoppingLists)
        .to
        .be
        .eql(newLists.map((l, index) => ({ ...l, active: index === 0 })));
    });
  });

  describe('CHANGE_TITLE', () => {
    it('should change the title of the given list', () => {
      const title = 'learning vue.js';
      state.shoppinglists = [{ id: '1', title: 'groceries' }, { id: '2', title: 'clothes' }];
      mutations[CHANGE_TITLE](state, { title, id: '1' });
      expect(state.shoppinglists)
        .to
        .eql([{ id: '1', title }, { id: '2', title: 'clothes' }]);
    });
  });
});
