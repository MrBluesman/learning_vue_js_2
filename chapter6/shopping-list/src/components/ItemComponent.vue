<template>
  <li class="list-group-item item"
      :class="{'item--removed': item.checked }">
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
    // or 'items.checked'
    isItemChecked() {
      this.updateList(this.id);
    },
  },
};
</script>

<style lang="scss"
       scoped>
.item {
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
