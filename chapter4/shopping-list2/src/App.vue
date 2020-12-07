<template>
  <div id="app"
       class="shopping-list">
    <h2 class="page-header shopping-list__header">{{ title }}</h2>
    <AddItemComponent @on-add-item="addItem"/>
    <ItemsComponent :items="items"/>
    <div class="shopping-list__footer">
      <hr>
      <ChangeTitleComponent v-model="title"/>
    </div>
  </div>
</template>

<script>
import AddItemComponent from './components/AddItemComponent.vue';
import ItemsComponent from './components/ItemsComponent.vue';
import ChangeTitleComponent from './components/ChangeTitleComponent.vue';

export default {
  name: 'App',
  components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent,
  },
  data() {
    return {
      title: 'Shopping List',
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
    };
  },
  methods: {
    addItem(event) {
      const { name, onSuccessFullAdd } = event;

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
  width: 40%;
  margin: 20px auto 0 auto;

  &__header {
    text-align: center;
  }

  &__footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
}
</style>
