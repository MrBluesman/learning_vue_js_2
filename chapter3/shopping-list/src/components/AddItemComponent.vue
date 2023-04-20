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
export default {
  name: 'AddItemComponent',
  data() {
    return {
      newItem: '',
    };
  },
  methods: {
    addItem() {
      this.$emit('on-add-item', {
        name: this.newItem,
        onSuccessFullAdd: () => {
          this.newItem = '';
        },
      });
    },
  },
};
</script>
