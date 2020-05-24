<template>
  <div id="app"
       class="container">
    <h2>
      <span>{{ 'Pomodoro' | uppercase }}</span>
      <ControlsComponent/>
    </h2>
    <StateTitleComponent :is-working="isWorking"/>
    <CountdownComponent class="mb-2"/>
    <KittensComponent/>
  </div>
</template>

<script>
import ControlsComponent from './components/ControlsComponent';
import StateTitleComponent from './components/StateTitleComponent';
import CountdownComponent from './components/CountdownComponent';
import KittensComponent from './components/KittensComponent';

window.data = {
  kittens: true,
  isWorking: true
};

export default {
  name: 'App',
  components: {
    KittensComponent,
    CountdownComponent,
    StateTitleComponent,
    ControlsComponent
  },
  data() {
    return window.data;
  }
};
</script>

<style lang="scss">

</style>
