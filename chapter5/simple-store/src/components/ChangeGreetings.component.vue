<template>
  <input :value="msg"
         type="text"
         name="msg" @keyup="changeMsg">
</template>

<script>
export default {
  name: 'ChangeGreetingsComponent',
  computed: {
    msg() {
      return this.$store.state.msg;
    }
  },
  methods: {
    changeMsg(event) {
      this.$store.commit('changeMessage', event.target.value);
    }
  }
};
</script>

<style scoped>

</style>
