// creating component
const HelloComponent = Vue.extend({
  template: '<h1>Hello</h1>'
});

// registering component
Vue.component('hello-component', HelloComponent);

// both initialization and registration can be written as single
// Vue.component invocation with corresponding options
Vue.component('hello-component2', {
  template: '<h1>Hello 2</h1>'
})

// initializing the Vue application
new Vue({
  el: '#app'
});
