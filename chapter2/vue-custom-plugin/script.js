import Vue from 'vue/dist/vue.js';
import VueMathPlugin from './VueMathPlugin';

Vue.use(VueMathPlugin);

new Vue({
  el: '#app',
  data: function () {
    return {
      item: 49
    };
  }
});
