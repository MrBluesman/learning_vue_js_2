<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'ShowGreetingsComponent',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
};
</script>
