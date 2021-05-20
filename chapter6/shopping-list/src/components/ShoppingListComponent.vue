<template>
  <div class="shopping-list">
    <h2 class="page-header shopping-list__header">{{ title }}</h2>
    <AddItemComponent @on-add-item="addItem"/>
    <ItemsComponent :items="items"/>
    <div class="shopping-list__footer">
      <hr>
      <ChangeTitleComponent :id="id"
                            :title="title"/>
    </div>
  </div>
</template>

<script>
import AddItemComponent from './AddItemComponent.vue';
import ItemsComponent from './ItemsComponent.vue';
import ChangeTitleComponent from './ChangeTitleComponent.vue';

export default {
  name: 'ShoppingListComponent',
  components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addItem(event) {
      const {
        name,
        onSuccessFullAdd,
      } = event;

      if (!name || this.items.filter((i) => i.text === name).length > 0) {
        return;
      }

      this.items.push({
        text: name,
        checked: false,
      });

      onSuccessFullAdd();
    },
  },
};
</script>

<style lang="scss"
       scoped>
.shopping-list {
  &__header {
    text-align: center;
  }

  &__footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
}
</style>
