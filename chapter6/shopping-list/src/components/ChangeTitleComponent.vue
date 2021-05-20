<template>
  <div class="change-title">
    <em>Change the title of your shopping list</em>
    <input :value="title"
           class="form-control"
           @input="onInput({ title: $event.target.value, id })"
           type="text">
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ChangeTitleComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      onInput: 'changeTitle',
    }),
  },
};
</script>
