<template lang="html">
  <div>
    <div v-if="!userConfirmedEmail" class="ui icon info message">
      <i class="open envelope outline icon"></i>
      <div class="content">
        <div class="header">
          Confirm your email
        </div>
        <p>Please confirm your email so that you can access private features of the service.</p>
      </div>
    </div>
    <app-projects-grid></app-projects-grid>
  </div>
</template>

<script>
import ProjectsGrid from '../Project/ProjectsGrid.vue';

export default {
  computed: {
    userConfirmedEmail() {
      return this.$store.getters.user.confirmed;
    },
  },
  components: {
    'app-projects-grid': ProjectsGrid,
  },
};
</script>
