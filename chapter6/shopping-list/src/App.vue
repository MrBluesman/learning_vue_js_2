<template>
  <div id="app"
       class="shopping-lists"
       :style="{ 'background-color': getListColor }">
    <ul class="nav nav-tabs"
        role="tablist">
      <li v-for="(list, index) in shoppingLists"
          :key="list.id"
          :class="index === 0 ? 'active' : ''"
          role="presentation"
          @click="changeActiveList(list.id)">
        <shopping-list-title-component :id="list.id"
                                       :title="list.title"
                                       :active="list.active"/>
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
import color from '@/mixins/color';
import { mapGetters, mapActions } from 'vuex';
import store from './vuex/store';

export default {
  name: 'App',
  mixins: [color],
  components: {
    ShoppingListTitleComponent,
    ShoppingListComponent,
  },
  computed: {
    ...mapGetters({
      shoppingLists: 'getLists',
      shoppingList: 'getListById',
      activeShoppingList: 'getActiveList',
    }),
    getListColor() {
      return this.opacityBackground(this.shoppingList(this.activeShoppingList?.id)?.color);
    },
  },
  store,
  methods: {
    ...mapActions([
      'populateShoppingLists',
      'createShoppingList',
      'changeActiveList',
    ]),
    addShoppingList() {
      this.createShoppingList({
        title: 'New Shopping List',
        items: [],
        // eslint-disable-next-line no-bitwise
        color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
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
  padding: 20px;
  border-radius: 2rem;

  .nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    text-align: center;

    &:before {
      display: none;
    }

    &-tabs {
      border: none;

      li > a {
        border-radius: 2rem;
        border: 1px solid #ddd;
        margin: 5px;
      }
    }
  }
}
</style>
