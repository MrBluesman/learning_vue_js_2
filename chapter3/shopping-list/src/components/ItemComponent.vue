<template>
  <li class="list-group-item item"
      :class="{'item--removed': item.checked }">
    <div class="checkbox">
      <label>
        <input v-model="item.checked"
               class="item__input"
               type="checkbox">
        <span>{{ item.text }}</span>
      </label>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ItemComponent',
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style lang="scss"
       scoped>
.item {
  list-style-type: none;

  span {
    margin-left: 5px;
  }

  &__input {
    margin-right: 7px;
  }

  &--removed {
    background-color: rgba(128, 124, 121, 0.23);

    label {
      text-decoration: line-through
    }
  }
}
</style>
