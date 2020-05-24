import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faPlay, faPause, faStop);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.filter('lowercase', (value) => value.toLowerCase());
Vue.filter('leftpad', (value) => value < 10 ? `0${value}` : value);

new Vue({
  render: h => h(App),
}).$mount('#app');
