import { expect } from 'chai';
import getters from '@/vuex/getters';

describe('getters.js', () => {
  let state;
  let lists;

  beforeEach(() => {
    lists = [{ id: '1', title: 'groceries' }, { id: '2', title: 'clothes' }];
    state = {
      shoppingLists: lists,
    };
  });

  describe('getLists', () => {
    it('should return lists', () => {
      expect(getters.getLists(state))
        .to
        .eql(lists);
    });
  });

  describe('getListById', () => {
    it('should return the shopping list object by its id', () => {
      expect(getters.getListById(state)('1'))
        .to
        .eql(lists[0]);
    });

    it('should not return anything if the passed id is not in the list', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(getters.getListById(state)('notexisting')).to.be.undefined;
    });
  });
});
