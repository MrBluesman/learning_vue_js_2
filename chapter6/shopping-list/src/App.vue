<template>
  <div id="app"
       class="shopping-lists">
    <ul class="nav nav-tabs"
        role="tablist">
      <li v-for="(list, index) in shoppingLists"
          :key="list.id"
          :class="index === 0 ? 'active' : ''"
          role="presentation">
        <shopping-list-title-component :id="list.id"
                                       :title="list.title"/>
      </li>
      <li>
        <a href="#"
           @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(list, index) in shoppingLists"
           :key="list.id"
           class="tab-pane"
           :class="index === 0 ? 'active' : ''"
           role="tabpane1"
           :id="list.id">
        <ShoppingListComponent :id="list.id"
                               :title="list.title"
                               :items="list.items"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListTitleComponent from '@/components/ShoppingListTitleComponent.vue';
import ShoppingListComponent from '@/components/ShoppingListComponent.vue';
import { mapGetters, mapActions } from 'vuex';
import store from './vuex/store';

export default {
  name: 'App',
  components: {
    ShoppingListTitleComponent,
    ShoppingListComponent,
  },
  computed: {
    ...mapGetters({
      shoppingLists: 'getLists',
    }),
  },
  store,
  methods: {
    ...mapActions([
      'populateShoppingLists',
      'createShoppingList',
    ]),
    addShoppingList() {
      this.createShoppingList({
        title: 'New Shopping List',
        items: [],
      });
    },
  },
  mounted() {
    this.populateShoppingLists();
  },
};
</script>

<style lang="scss"
       scoped>
.shopping-lists {
  width: 40%;
  margin: 20px auto 0 auto;
}
</style>
