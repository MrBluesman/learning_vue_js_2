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
  newItem: '',
};

new Vue({
  el: '#shopping-list',
  data,
  methods: {
    addItem() {
      if (!this.newItem || this.items.filter(i => i.name === this.newItem).length > 0) {
        return;
      }

      this.items.push({
        name: this.newItem,
        completed: false
      });

      this.newItem = '';
    }
  }
});
