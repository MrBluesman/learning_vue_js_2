<template>
  <div id="app"
       class="shopping-lists">
    <ul class="nav nav-tabs"
        role="tablist">
      <li v-for="(list, index) in shoppingLists"
          :key="list.id"
          :class="index === 0 ? 'active' : ''"
          role="presentation">
        <a :href="`#${list.id}`"
           :aria-controls="list.id"
           role="tab"
           data-toggle="tab">{{ list.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(list, index) in shoppingLists"
           :key="list.id"
           class="tab-pane"
           :class="index === 0 ? 'active' : ''"
           role="tabpanel"
           :id="list.id">
        <ShoppingListComponent :id="list.id"
                               :title="list.title"
                               :items="list.items"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListComponent from '@/components/ShoppingListComponent.vue';
import { mapGetters } from 'vuex';
import store from './vuex/store';

export default {
  name: 'App',
  components: {
    ShoppingListComponent,
  },
  computed: {
    ...mapGetters({
      shoppingLists: 'getLists',
    }),
  },
  store,
};
</script>

<style lang="scss"
       scoped>
.shopping-lists {
  width: 40%;
  margin: 20px auto 0 auto;
}
</style>
