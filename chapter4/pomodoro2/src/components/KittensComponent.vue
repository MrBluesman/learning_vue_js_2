<template>
  <div class="card bg-light">
    <div class="card-body">
      <img :src="catImgSrc"
           alt="Cat image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'KittensComponent',
  data() {
    return {
      catImgSrc: 'https://cdn2.thecatapi.com/images/MjAwMDc1MQ.jpg'
    };
  }
};
</script>
