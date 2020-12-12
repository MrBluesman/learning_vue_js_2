<template>
  <input :value="msg"
         type="text"
         name="msg"
         @keyup="changeMsg">
</template>

<script>
import { mapGetters } from 'vuex';
import { CHANGE_MSG } from '@/vuex/mutation_types';

export default {
  name: 'ChangeGreetingsComponent',
  computed: mapGetters({
    msg: 'getMessage',
  }),
  methods: {
    changeMsg(event) {
      this.$store.commit(CHANGE_MSG, event.target.value);
    }
  }
};
</script>

<style scoped>

</style>
