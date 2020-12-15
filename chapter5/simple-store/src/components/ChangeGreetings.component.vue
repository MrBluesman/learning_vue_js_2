<template>
  <input :value="msg"
         type="text"
         name="msg"
         @keyup="handleMessageInputChanges">
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ChangeGreetingsComponent',
  computed: mapGetters({
    msg: 'getMessage',
  }),
  methods: mapActions([
    'handleMessageInputChanges',
  ])
};
</script>

<style scoped>

</style>
