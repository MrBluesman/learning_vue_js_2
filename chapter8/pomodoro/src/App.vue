<template>
  <div id="app"
       class="container" v-noise="'brown'" v-lofi>
    <h2>
      <span>{{ 'Pomodoro' | uppercase }}</span>
      <ControlsComponent/>
    </h2>
    <StateTitleComponent />
    <CountdownComponent class="mb-2"/>
    <transition name="fade">
      <KittensComponent v-show="!isWorking"/>
    </transition>
  </div>
</template>

<script>
import ControlsComponent from '@/components/ControlsComponent';
import StateTitleComponent from '@/components/StateTitleComponent';
import CountdownComponent from '@/components/CountdownComponent';
import KittensComponent from '@/components/KittensComponent';
import store from './vuex/store';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    KittensComponent,
    CountdownComponent,
    StateTitleComponent,
    ControlsComponent
  },
  computed: mapGetters(['isWorking']),
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
