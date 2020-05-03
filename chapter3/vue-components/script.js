// register form component
Vue.component('form-component', {
  template: '#form',
  props: ['value'],
  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value);
    }
  }
});

// register hello component
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

// create greetings component base on the greetings template
Vue.component('greetings-component', {
  template: '#greetings',
  data: function () {
    return {
      user: 'hero'
    };
  }
});

// initializing the Vue application
new Vue({
  el: '#app',
});
