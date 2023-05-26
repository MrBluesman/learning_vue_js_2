import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faStop, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import VueNoiseGeneratorPlugin from '@/plugins/VueNoiseGeneratorPlugin';

library.add(faPlay, faPause, faStop, faVolumeUp, faVolumeMute);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.filter('lowercase', (value) => value.toLowerCase());
Vue.filter('uppercase', (value) => value.toUpperCase());
Vue.filter('addSpace', (value) => `${value} `);
Vue.filter('leftPad', (value) => value < 10 ? `0${value}` : value);

Vue.use(VueNoiseGeneratorPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
