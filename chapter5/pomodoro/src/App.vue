<template>
  <div id="app"
       class="container">
    <h2>
      <span>{{ 'Pomodoro' | uppercase }}</span>
      <ControlsComponent/>
    </h2>
    <StateTitleComponent :is-working="isWorking"/>
    <CountdownComponent class="mb-2"/>
    <transition name="fade">
      <KittensComponent v-show="!isWorking"/>
    </transition>
  </div>
</template>

<script>
import ControlsComponent from './components/ControlsComponent';
import StateTitleComponent from './components/StateTitleComponent';
import CountdownComponent from './components/CountdownComponent';
import KittensComponent from './components/KittensComponent';
import store from 'vuex/store';

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
  },
  store,
};
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
