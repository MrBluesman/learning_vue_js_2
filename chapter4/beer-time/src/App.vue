<template>
  <div id="app">
    <h1 v-if="isAdmin">Beer Time!</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isAdmin: false,
    };
  }
};
</script>
