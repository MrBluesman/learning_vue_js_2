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
      catImgSrc: 'https://www.cat-test-url.com/cat.png'
    };
  }
};
</script>
