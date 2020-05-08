<template>
  <div id="app">
    <h1>This is a single file component demo</h1>
    <HelloComponent/>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent';

export default {
  name: 'App',
  components: {
    HelloComponent
  }
};
</script>
