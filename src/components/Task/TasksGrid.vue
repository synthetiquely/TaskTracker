<template>
  <div>
    <h4 class="ui horizontal divider header">
      <i class="archive icon"></i>
      Tasks
    </h4>
    <div class="ui items">
      <app-project-task-preview></app-project-task-preview>
      <app-project-task-preview></app-project-task-preview>
      <app-project-task-preview></app-project-task-preview>
    </div>
  </div>
</template>

<script>
import TaskPreview from './TaskPreview.vue';

export default {
  components: {
    'app-project-task-preview': TaskPreview,
  },
};
</script>
