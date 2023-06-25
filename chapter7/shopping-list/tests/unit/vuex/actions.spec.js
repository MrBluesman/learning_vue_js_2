import chai, { expect } from 'chai';
import sinon from 'sinon';
// eslint-disable-next-line no-unused-vars
import { ADD_SHOPPING_LIST, CHANGE_TITLE, POPULATE_SHOPPING_LISTS } from '@/vuex/mutation_types';
import sinonChai from 'sinon-chai';
import actions from '@/vuex/actions';
import nock from 'nock';

chai.use(sinonChai);

describe('actions.js', () => {
  let lists;
  let store;

  // eslint-disable-next-line no-unused-vars
  const successPost = { post: true };
  const successPut = { put: true };
  // eslint-disable-next-line no-unused-vars
  const successDelete = { delete: true };

  const newShoppingList = {
    id: '3',
    title: 'New',
  };

  beforeEach(() => {
    lists = [{
      id: '1',
      title: 'Groceries',
    }, {
      id: '2',
      title: 'Clothes',
    }];

    store = {
      // method, data
      commit: (method, data) => {
        console.log(method);
        console.log(data);
      },
      dispatch: () => Promise.resolve(),
      state: {
        shoppingLists: lists,
      },
    };

    sinon.stub(store, 'commit');

    // mock server
    nock('http://localhost:3000')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .get('/shopping-lists')
      .reply(200, JSON.stringify(lists));

    nock('http://localhost:3000', {
      reqheaders: {
        'access-control-request-method': 'PUT',
      },
    })
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .options('/shopping-lists/1')
      .reply(200, JSON.stringify(successPut));

    nock('http://localhost:3000')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .put('/shopping-lists/1')
      .reply(200, JSON.stringify(successPut));

    nock('http://localhost:3000')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .delete('/shopping-lists/1')
      .reply(200, JSON.stringify(successDelete));
  });

  afterEach(() => {
    // restore stubs and server mock
    store.commit.restore();
  });

  describe('populateShoppingLists', () => {
    // here we will add our test case
    it('should call commit method with POPULATE_SHOPPING_LIST and with mocked lists', (done) => {
      actions.populateShoppingLists(store)
        .then(() => {
          expect(store.commit)
            .to
            .have
            .been
            .calledWith(POPULATE_SHOPPING_LISTS, lists);

          done();
        })
        .catch((e) => {
          done(new Error(e.message));
        });
    });
  });

  describe('changeTitle', () => {
    it('should call commit method with CHANGE_TITLE string', (done) => {
      const title = 'new title';

      actions.changeTitle(store, { title, id: '1' })
        .then(() => {
          expect(store.commit)
            .to
            .have
            .been
            .calledWith(CHANGE_TITLE, { title, id: '1' });

          done();
        })
        .catch((e) => {
          done(new Error(e.message));
        });
    });
  });

  describe('updateList', () => {
    it('should return successful PUT response', (done) => {
      actions.updateList(store, '1')
        .then((data) => {
          expect(data.data)
            .to
            .eql(successPut);

          done();
        })
        .catch((e) => {
          done(new Error(e.message));
        });
    });
  });

  // TODO: test for createShoppingList
  describe('createShoppingList', () => {
    it('should return successful POST response', (done) => {
      nock('http://localhost:3000', {
        body: JSON.stringify(newShoppingList),
      })
        .defaultReplyHeaders({
          'access-control-allow-origin': '*',
          'access-control-allow-credentials': 'true',
        })
        .post('/shopping-lists')
        .reply(200, JSON.stringify(successPost));

      actions.createShoppingList(store, newShoppingList)
        .then((data) => {
          expect(data.data)
            .to
            .eql(successPost);

          done();
        })
        .catch((e) => {
          done(new Error(e.message));
        });
    });

    it('should call commit method with ADD_SHOPPING_LIST string and correct list when API is unavailable', (done) => {
      nock('http://localhost:3000', {
        body: JSON.stringify(newShoppingList),
      })
        .defaultReplyHeaders({
          'access-control-allow-origin': '*',
          'access-control-allow-credentials': 'true',
        })
        .post('/shopping-lists')
        .reply(404);

      actions.createShoppingList(store, newShoppingList)
        .then(() => {
          done();
        })
        .catch((e) => {
          expect(e.status)
            .to
            .eql(404);

          expect(store.commit)
            .to
            .have
            .been
            .calledWith(ADD_SHOPPING_LIST, newShoppingList);

          done();
        });
    });
  });

  // TODO: test for deleteShoppingList
});
