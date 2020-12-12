<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'ShowGreetingsComponent',
  computed: {
    msg() {
      return this.$store.state.msg;
    }
  }
};
</script>
