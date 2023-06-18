import chai, { expect } from 'chai';
import sinon from 'sinon';
import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS } from '@/vuex/mutation_types';
import sinonChai from 'sinon-chai';
import actions from '@/vuex/actions';
import nock from 'nock';

chai.use(sinonChai);

describe('actions.js', () => {
  let lists;
  let store;

  const successPost = { post: true };
  const successPut = { put: true };
  const successDelete = { delete: true };

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

    nock('http://localhost:3000')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .post('/shopping-lists')
      .reply(200, JSON.stringify(successPost));

    nock('http://localhost:3000')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .put('/shopping-lists')
      .reply(200, JSON.stringify(successPut));

    nock('http://localhost:3000')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .delete('/shopping-lists')
      .reply(200, JSON.stringify(successDelete));
  });

  afterEach(() => {
    // restore stubs and server mock
    store.commit.restore();
    nock.restore();
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
});
