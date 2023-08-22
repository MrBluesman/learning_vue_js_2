import Vue from 'vue';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import mutations from '@/vuex/mutations'
import { START } from '@/vuex/mutation_types';

chai.use(sinonChai);

describe('mutations', () => {
  let state;

  beforeEach(() => {
    state = {};

    // let's mock Vue noise plugin
    // to be able to listen to its methods
    Vue.noise = {
      start: () => {},
      pause: () => {},
      stop: () => {},
    };

    sinon.spy(Vue.noise, 'start');
    sinon.spy(Vue.noise, 'pause');
    sinon.spy(Vue.noise, 'stop');

    Vue.lofi = {
      start: () => {},
      pause: () => {},
      stop: () => {},
    };

    sinon.spy(Vue.lofi, 'start');
    sinon.spy(Vue.lofi, 'pause');
    sinon.spy(Vue.lofi, 'stop');
  });

  afterEach(() => {
    Vue.noise.start.restore();
    Vue.noise.pause.restore();
    Vue.noise.stop.restore();

    Vue.lofi.start.restore();
    Vue.lofi.pause.restore();
    Vue.lofi.stop.restore();
  });

  describe('START', () => {
    it('should set all the state properties correctly after start', () => {
      // ensure that all the properties are undefined
      // before calling the start method
      expect(state.started).to.be.undefined;
      expect(state.stopped).to.be.undefined;
      expect(state.paused).to.be.undefined;
      expect(state.interval).to.be.undefined;

      // call the start method
      mutations[START](state);

      // check that all the properties were correctly set
      expect(state.started).to.be.true;
      expect(state.stopped).to.be.false;
      expect(state.paused).to.be.false;
      expect(state.interval).to.not.be.undefined;
    });

    it('should call Vue.noise.start method if both state.isWorking and state.soundEnabled are true', () => {
      state.isWorking = true;
      state.soundEnabled = true;

      mutations[START](state);

      expect(Vue.noise.start).to.have.been.called;
    });

    it('should not call Vue.noise.start method if state.isWorking is not true', () => {
      state.isWorking = false;
      state.soundEnabled = true;

      mutations[START](state);

      expect(Vue.noise.start).to.not.have.been.called;
    });

    it('should not call Vue.noise.start method if state.soundEnabled is not true', () => {
      state.isWorking = true;
      state.soundEnabled = false;

      mutations[START](state);

      expect(Vue.noise.start).to.not.have.been.called;
    });
  });
});
