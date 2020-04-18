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
/*
 * Declaring components
 * */
const ItemsComponents = Vue.extend({
  data: function () {
    return data;
  },
  template:
    '  <ul class="list-group shopping-list__list">' +
    '    <li v-for="item in items"' +
    '        class="list-group-item list__item"' +
    '        :class="{ \'list__item--removed\': item.completed }">' +
    '      <label>' +
    '        <input v-model="item.completed"' +
    '               class="item__input"' +
    '               type="checkbox">{{ item.name }}' +
    '      </label>' +
    '    </li>' +
    '  </ul>'
});

const ChangeTitleComponent = Vue.extend({
  data: function () {
    return data;
  },
  template:
    '<input v-model="title"' +
    '           type="text"' +
    '           class="footer__input form-control">'
})

const AddItemComponent = Vue.extend({
  data: function () {
    return data;
  },
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
  },
  template:
    '<div class="input-group">' +
    '    <input v-model="newItem"' +
    '           @keyup.enter="addItem"' +
    '           class="form-control shopping-list__input"' +
    '           placeholder="Add shopping list item"' +
    '           type="text">' +
    '    <span class="input-group-btn">' +
    '      <button type="button"' +
    '              @click="addItem"' +
    '              class="btn btn-default shopping-list__button">Add!</button>' +
    '    </span>\n' +
    '  </div>'
})

/*
* Registering components
* */
Vue.component('items-component', ItemsComponents);
Vue.component('change-title-component', ChangeTitleComponent);
Vue.component('add-item-component', AddItemComponent);

/*
* Instantiating a Vue instance
* */
new Vue({
  el: '#shopping-list',
  data
});
