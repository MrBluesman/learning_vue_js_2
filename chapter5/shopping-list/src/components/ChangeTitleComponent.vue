<template>
  <div class="change-title">
    <em>Change the title of your shopping list</em>
    <input :value="title"
           class="form-control"
           @input="onInput"
           type="text">
  </div>
</template>

<script>
export default {
  name: 'ChangeTitleComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    onInput(event) {
      this.$emit('on-change-title', event.target.value);
    },
  },
};
</script>
