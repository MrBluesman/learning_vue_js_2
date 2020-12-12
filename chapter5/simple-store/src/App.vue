<template>
  <div id="app">
    <ShowGreetingsComponent/>
    <ChangeGreetingsComponent/>
  </div>
</template>

<script>
import ShowGreetingsComponent from '@/components/ShowGreetings.component';
import ChangeGreetingsComponent from '@/components/ChangeGreetings.component';
import store from './vuex/store';

export default {
  name: 'App',
  components: {
    ChangeGreetingsComponent,
    ShowGreetingsComponent
  },
  store,
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
