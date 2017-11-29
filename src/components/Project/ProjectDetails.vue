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
      <app-project-actions></app-project-actions>
      <app-project-tasks></app-project-tasks>
    </div>
</template>

<script>
import ProjectTeamMembers from './ProjectTeamMembers.vue';
import ProjectStatistics from './ProjectStatistics.vue';
import ProjectDescription from './ProjectDescription.vue';
import ProjectActions from './ProjectActions.vue';
import TasksGrid from '../Task/TasksGrid.vue';

export default {
  components: {
    'app-project-team-members': ProjectTeamMembers,
    'app-project-stats': ProjectStatistics,
    'app-project-description': ProjectDescription,
    'app-project-tasks': TasksGrid,
    'app-project-actions': ProjectActions,
  },
};
</script>

<style lang="css">

</style>
