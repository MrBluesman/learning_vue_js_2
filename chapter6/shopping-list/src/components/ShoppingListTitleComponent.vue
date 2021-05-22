<template>
  <a :href="`#${id}`"
     :aria-controls="id"
     role="tab"
     data-toggle="tab">{{ title }}</a>
</template>

<script>
export default {
  name: 'ShoppingListTitleComponent',
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
};
</script>
