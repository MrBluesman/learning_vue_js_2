<template>
  <li class="list-group-item item"
      :class="{'item--removed': isItemChecked }">
    <div class="checkbox">
      <label>
        <input v-model="item.checked"
               class="item__input"
               type="checkbox">{{ item.text }}
      </label>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ItemComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isItemChecked() {
      return this.item.checked;
    },
  },
  methods: mapActions(['updateList']),
  watch: {
    isItemChecked() {
      this.updateList(this.id);
    },
    // or 'items.checked'
    // 'item.checked': function () {
    // },
  },
};
</script>

<style lang="scss"
       scoped>
.item {
  border-radius: 3rem;
  margin-bottom: 10px;
  padding-bottom: 5px;
  padding-top: 5px;

  &__input {
    margin-right: 7px;
  }

  &--removed {
    background-color: rgba(128, 124, 121, 0.23);

    label {
      text-decoration: line-through;
    }
  }
}
</style>
