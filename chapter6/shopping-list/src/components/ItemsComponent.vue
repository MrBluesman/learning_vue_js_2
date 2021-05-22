<template>
  <div class="items">
    <ItemComponent v-for="(item, index) in items"
                   :key="index"
                   :id="id"
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
    id: {
      type: Number,
      required: true,
    },
    items: {
      type: Array,
      required: true,
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
