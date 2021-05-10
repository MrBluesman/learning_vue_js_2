import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutation_types';

Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});