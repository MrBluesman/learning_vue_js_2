<template>
  <div class="items">
    <ItemComponent v-for="(item, index) in items"
                   :key="index"
                   :item="item"></ItemComponent>
  </div>
</template>

<script>
import ItemComponent from './ItemComponent.vue';

export default {
  name: 'ItemsComponent',
  components: {
    ItemComponent,
  },
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style lang="scss"
       scoped>
.items {
  margin-top: 15px;
}
</style>
