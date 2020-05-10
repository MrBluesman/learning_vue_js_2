<template>
  <div class="change-title">
    <em>Change the title of your shopping list</em>
    <input :value="value"
           class="form-control"
           @input="onInput"
           type="text">
  </div>
</template>

<script>
export default {
  name: 'ChangeTitleComponent',
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
