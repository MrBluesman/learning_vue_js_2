<template>
  <input :value="msg"
         type="text"
         name="msg"
         @keyup="changeMsg">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChangeGreetingsComponent',
  computed: mapGetters({
    msg: 'getMessage',
  }),
  methods: {
    changeMsg(event) {
      this.$store.commit('changeMessage', event.target.value);
    }
  }
};
</script>

<style scoped>

</style>
