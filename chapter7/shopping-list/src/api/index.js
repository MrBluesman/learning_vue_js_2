import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const shoppingListsResource = Vue.resource('http://localhost:3000/shopping-lists{/id}');

export default {
  fetchShoppingLists: () => shoppingListsResource.get(),
  addNewShoppingList: (data) => shoppingListsResource.save(data),
  updateShoppingList: (data) => shoppingListsResource.update({ id: data.id }, data),
  deleteShoppingList: (id) => shoppingListsResource.remove({ id }),
};
