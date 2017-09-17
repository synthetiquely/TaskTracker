<template>
  <div id="app">
    <app-navbar></app-navbar>
    <main class="ui container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/Common/NavBar.vue';

export default {
  name: 'app',
  components: {
    'app-navbar': NavBar,
  },
};
</script>
