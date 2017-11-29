<template>
  <div>
    <h4 class="ui horizontal divider header">
      <i class="archive icon"></i>
      Tasks
    </h4>
    <div class="ui secondary menu">
      <a class="item">
        <div class="ui basic button">
          <i class="sort icon"></i> Waiting</div>
      </a>
      <a class="item">
        <div class="ui pink button">
          <i class="sort icon"></i> Assigned to you</div>
      </a>
      <a class="item">
        <div class="ui orange button">
          <i class="sort icon"></i> Implementation</div>
      </a>
      <a class="item">
        <div class="ui yellow button">
          <i class="sort icon"></i> Verifying</div>
      </a>
      <a class="item">
        <div class="ui green button">
          <i class="sort icon"></i> Releasing</div>
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search...">
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
      <app-create-project-modal v-if="showModal" @close="showModal = false">
      </app-create-project-modal>
    </div>
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
