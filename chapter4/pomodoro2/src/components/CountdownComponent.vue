<template>
  <div class="card bg-light">
    <div class="card-body">
      <span>{{ min | leftPad }}:{{ sec | leftPad }}</span>
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

