<template>
  <input v-model="msg"
         type="text"
         name="msg">
</template>

<script>
export default {
  name: 'ChangeGreetingsComponent',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
