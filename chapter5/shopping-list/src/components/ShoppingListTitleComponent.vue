<template>
  <a :href="href"
     :aria-controls="id"
     role="tab"
     data-toggle="tab">{{ title }}</a>
</template>

<script>
export default {
  name: 'ShoppingListTitleComponent',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    href() {
      return `#${this.id}`;
    },
  },
};
</script>

<style scoped>

</style>
