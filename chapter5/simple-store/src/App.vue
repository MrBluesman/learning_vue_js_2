<template>
  <div id="app">
    <ShowGreetingsComponent :msg="msg"/>
    <ChangeGreetingsComponent :msg="msg"/>
  </div>
</template>

<script>

import ShowGreetingsComponent from '@/components/ShowGreetings.component';
import ChangeGreetingsComponent from '@/components/ChangeGreetings.component';
export default {
  name: 'App',
  components: { ChangeGreetingsComponent, ShowGreetingsComponent },
  data() {
    return {
      msg: 'Hello Vue!'
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
