<template>
  <a :href="`#${id}`"
     :aria-controls="id"
     role="tab"
     data-toggle="tab"
     class="shopping-list-title"
     :class="{ 'shopping-list-title--active': active }"
     :style="{ 'background-color': getListColor,
     'border-color': getBorderColor }">
    {{ title }}
    <i class="glyphicon glyphicon-remove shopping-list-title__icon"
       @click="deleteList(id)"></i>
  </a>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import color from '@/mixins/color';

export default {
  name: 'ShoppingListTitleComponent',
  mixins: [color],
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      shoppingList: 'getListById',
    }),
    getListColor() {
      return this.opacityBackground(this.shoppingList(this.id)?.color, this.active ? '.3' : '.1');
    },
    getBorderColor() {
      return this.opacityBackground(this.shoppingList(this.id)?.color, this.active ? '.4' : '.2');
    },
  },
  filters: {
    addOpacityToColor(value, activeOpacity, defaultOpacity) {
      return this.opacityBackground(value, this.active ? activeOpacity : defaultOpacity);
    },
  },
  methods: mapActions({
    deleteList: 'deleteShoppingList',
  }),
};
</script>

<style scoped
       lang="scss">

.shopping-list-title {
  text-decoration: none;
  color: #303030;

  &:hover, &--active {
    font-weight: bold;
  }

  &__icon {
    font-size: x-small;
    padding-left: 3px;
    cursor: pointer;

    &:hover {
      color: #e20000;
    }
  }
}
</style>
