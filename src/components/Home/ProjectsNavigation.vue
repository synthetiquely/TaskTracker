<template lang="html">
  <div class="ui secondary menu">
  <a class="active item">
    Your Projects
  </a>
  <a class="item">
    <div class="ui primary button" @click="showModal = true">Create new</div>
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
</template>

<script>
import CreateProjectModal from '../Project/CreateProjectModal.vue';

export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    'app-create-project-modal': CreateProjectModal,
  },
};
</script>
