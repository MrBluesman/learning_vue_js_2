// 1. both initialization and registration can be written as single
// Vue.component invocation with corresponding options
// 2. calling parent's data attributes in the component
Vue.component('hello-component', {
  template: '#hello',
  data: function () {
    return {
      msg: 'Hello'
    };
  },
  props: ['user']
});

// initializing the Vue application
new Vue({
  el: '#app',
  data: {
    user: 'hero'
  }
});
