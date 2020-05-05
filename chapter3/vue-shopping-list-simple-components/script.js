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
      this.$emit('on-add-item', {
        item: this.newItem,
        onSuccessFullAdd: () => this.newItem = ''
      });
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
    addItem(event) {
      const { item, onSuccessFullAdd } = event;

      if (!item || this.items.filter(i => i.name === item).length > 0) {
        return;
      }

      this.items.push({
        name: item,
        completed: false
      });

      onSuccessFullAdd();
    }
  }
});
