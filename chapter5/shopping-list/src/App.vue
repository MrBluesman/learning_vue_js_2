<template>
  <div id="app"
       class="shopping-lists">
    <ul class="nav nav-tabs"
        role="tablist">
      <li v-for="(list, index) in shoppingLists"
          :key="list.id"
          :class="index === 0 ? 'active' : ''"
          role="presentation">
        <ShoppingListTitleComponent :id="list.id"
                                    :title="list.title"/>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(list, index) in shoppingLists"
           :key="list.id"
           class="tab-pane"
           :class="index === 0 ? 'active' : ''"
           role="tabpane1"
           :id="list.id">
        <ShoppingListComponent :title="list.title"
                               :items="list.items"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListComponent from '@/components/ShoppingListComponent.vue';
import ShoppingListTitleComponent from '@/components/ShoppingListTitleComponent.vue';

export default {
  name: 'App',
  components: {
    ShoppingListTitleComponent,
    ShoppingListComponent,
  },
  data() {
    return {
      shoppingLists: [
        {
          id: 'groceries',
          title: 'Groceries',
          items: [
            {
              text: 'Bananas',
              checked: true,
            },
            {
              text: 'Apples',
              checked: false,
            },
          ],
        },
        {
          id: 'clothes',
          title: 'Clothes',
          items: [
            {
              text: 'black dress',
              checked: false,
            },
            {
              text: 'all stars',
              checked: false,
            },
          ],
        },
      ],
    };
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
