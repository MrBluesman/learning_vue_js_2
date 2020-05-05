const data = {
  title: 'Shopping List',
  items: [
    {
      name: 'Banana',
      completed: false,
    },
    {
      name: 'Tomato',
      completed: false,
    },
    {
      name: 'Garlic',
      completed: true
    }
  ],
};

// add item component
Vue.component('add-item-component', {
  template: '#add-item-template',
  data: function () {
    return {
      newItem: ''
    };
  },
  methods: {
    addItem: function () {
      console.log('Implement adding');
    }
  }
});

// item component
Vue.component('item-component', {
  template: '#item-template',
  props: ['item']
});

// items component
Vue.component('items-component', {
  template: '#items-template',
  props: ['items']
});

Vue.component('change-title-component', {
  template: '#change-title-template',
  props: ['value'],
  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value);
    }
  }
});

new Vue({
  el: '#shopping-list',
  data,
  methods: {
    addItem() {
      // if (!this.newItem || this.items.filter(i => i.name === this.newItem).length > 0) {
      //   return;
      // }
      //
      // this.items.push({
      //   name: this.newItem,
      //   completed: false
      // });
      //
      // this.newItem = '';
    }
  }
});
