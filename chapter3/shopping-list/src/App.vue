<template>
  <div id="app"
       class="shopping-list">
    <h2 class="page-header shopping-list__header">{{ title }}</h2>
    <AddItemComponent/>
    <ItemsComponent :items="items"/>
    <div class="shopping-list__footer">
      <hr>
      <ChangeTitleComponent/>
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
    addItem(text) {
      if (!text || this.items.filter((i) => i.text === text).length > 0) {
        return;
      }

      this.items.push({
        text,
        checked: false,
      });
    },
  },
};
</script>

<style lang="scss">
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
