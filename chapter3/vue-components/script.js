// both initialization and registration can be written as single
// Vue.component invocation with corresponding options
Vue.component('hello-component', {
  template: '<h1>Hello</h1>',
  data: function () {
    return { msg: 'Hello' };
  }
});

// initializing the Vue application
new Vue({
  el: '#app'
});
