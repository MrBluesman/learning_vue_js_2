<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloComponent',
  data() {
    return {
      msg: 'Hello!'
    };
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
