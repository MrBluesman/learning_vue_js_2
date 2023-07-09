import Vuex from 'vuex';
import { expect } from 'chai';
import sinon from 'sinon';
import AddItemComponent from '@/components/AddItemComponent.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '../../../src/vuex/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AddItemComponent.vue', () => {
  describe('initialization', () => {
    it('should initialize the component with empty string newItem', () => {
      expect(AddItemComponent.data())
        .to
        .eql({
          newItem: '',
        });
    });
  });

  describe('addItem', () => {
    let wrapper;
    const newItem = 'Learning Vue JS';

    beforeEach(() => {
      wrapper = shallowMount(AddItemComponent, {
        propsData: { id: 0 },
        store,
        localVue,
      });

      // set a new item
      wrapper.setData({ newItem });
    });

    it('should call $emit method', () => {
      const button = wrapper.find('button');

      // trigger the add item action
      button.trigger('click');

      const emittedEvent = wrapper.emitted()['on-add-item'][0][0];

      // $emit should be called with custom event 'on-add-item', a newItem value
      expect(emittedEvent.name)
        .equal(newItem);
      // and onSuccessFullAdd callback
      // eslint-disable-next-line no-unused-expressions
      expect(emittedEvent.onSuccessFullAdd).to.not.be.undefined;
    });

    it('should update list and reset new item', () => {
      // stub store's dispatch method
      sinon.stub(store, 'dispatch');

      // trigger onSuccessFullAdd callback action
      wrapper.vm.onSuccessFullAdd();

      // newItem should be reset
      expect(wrapper.vm.newItem)
        .to
        .eql('');

      // dispatch should be called with updateList and the id of the list
      expect(store.dispatch)
        .to
        .have
        .been
        .calledWith('updateList', 0);
    });
  });
});
