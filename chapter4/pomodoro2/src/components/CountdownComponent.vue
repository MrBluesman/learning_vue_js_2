<template>
  <div class="card bg-light">
    <div class="card-body">
      <span>{{ min + ':' + sec }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountdownComponent',
  data() {
    return {
      min: '00',
      sec: '00'
    };
  }
};
</script>

<style scoped>

</style>
