<template lang="html">
  <div class="ui segment">
    <div class="ui left rail">
      <div class="ui segment">
        <app-project-team-members></app-project-team-members>
      </div>
    </div>
    <div class="ui right rail">
      <div class="ui segment">
        <app-project-stats></app-project-stats>
      </div>
    </div>
    <app-project-description></app-project-description>
  </div>
</template>

<script>
import ProjectTeamMembers from './ProjectTeamMembers.vue';
import ProjectStatistics from './ProjectStatistics.vue';
import ProjectDescription from './ProjectDescription.vue';

export default {
  components: {
    'app-project-team-members': ProjectTeamMembers,
    'app-project-stats': ProjectStatistics,
    'app-project-description': ProjectDescription,
  },
};
</script>

<style lang="css">

</style>
