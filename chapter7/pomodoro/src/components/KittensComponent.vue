<template>
  <div class="card bg-light kittens">
    <div class="card-body">
      <img :src="catImgSrc"
           alt="Cat image">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'KittensComponent',
  computed: mapGetters({
    catImgSrc: 'getCatImgSrc',
  }),
  methods: mapActions(['fetchKitten']),
  mounted() {
    this.fetchKitten();
  },
};
</script>

<style scoped>
.card-body {
  justify-content: center;
  display: flex;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
