<template>
  <div id="app"
       class="container">
    <h2>
      <span>Pomodoro</span>
      <ControlsComponent/>
    </h2>
    <StateTitleComponent/>
    <CountdownComponent/>
    <KittensComponent/>
  </div>
</template>

<script>
import ControlsComponent from './components/ControlsComponent';
import StateTitleComponent from './components/StateTitleComponent';
import CountdownComponent from './components/CountdownComponent';
import KittensComponent from './components/KittensComponent';

export default {
  name: 'App',
  components: {
    KittensComponent,
    CountdownComponent,
    StateTitleComponent,
    ControlsComponent
  }
};
</script>

<style lang="scss">

</style>
