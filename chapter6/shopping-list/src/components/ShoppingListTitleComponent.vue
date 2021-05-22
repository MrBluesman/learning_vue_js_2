<template>
  <a :href="`#${id}`"
     :aria-controls="id"
     role="tab"
     data-toggle="tab">
    {{ title }}
    <i class="glyphicon glyphicon-remove"
       @click="deleteList(id)"></i>
  </a>
</template>

<script>
import { mapActions } from 'vuex';

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
  methods: mapActions({
    deleteList: 'deleteShoppingList',
  }),
};
</script>

<style scoped>
i {
  font-size: x-small;
  padding-left: 3px;
  cursor: pointer;
}

i:hover {
  color: darkred;
}
</style>
