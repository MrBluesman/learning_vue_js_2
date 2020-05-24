<template>
  <div class="card bg-light">
    <div class="card-body">
      <span>{{ min | leftpad }}:{{ sec | leftpad }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountdownComponent',
  data() {
    return {
      min: 1,
      sec: 5,
    };
  }
};
</script>

<style scoped>

</style>
