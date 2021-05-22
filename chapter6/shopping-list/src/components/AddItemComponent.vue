<template>
  <div class="add-item">
    <div class="input-group">
      <input type="text"
             @keyup.enter="addItem"
             v-model="newItem"
             class="form-control"
             placeholder="Add shopping list item">
      <span class="input-group-btn">
        <button class="btn btn-default"
                @click="addItem"
                type="button">Add!</button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddItemComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      newItem: '',
    };
  },
  methods: {
    ...mapActions(['updateList']),
    addItem() {
      this.$emit('on-add-item', {
        name: this.newItem.trim(),
        onSuccessFullAdd: () => {
          this.newItem = '';
          this.updateList(this.id);
        },
      });
    },
  },
};
</script>

<style scoped>

</style>
