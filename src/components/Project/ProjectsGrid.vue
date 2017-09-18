<template lang="html">
  <div>
    <div v-if="hasDataToDisplay">
      <div class="ui link cards">
          <app-project-preview
            v-for="project of projects"
            :project="project"
            :key="project._id"
          >
          </app-project-preview>
      </div>
      <div class="cards-pagination">
        <div class="ui pagination menu">
            <a class="icon item">
              <i class="left chevron icon"></i>
            </a>
            <a class="item pink active">1</a>
            <a class="item">2</a>
            <a class="item">3</a>
            <a class="item">4</a>
            <a class="icon item">
              <i class="right chevron icon"></i>
            </a>
          </div>
      </div>
    </div>
    <app-nodata v-else></app-nodata>
  </div>
</template>

<script>
import ProjectPreview from './ProjectPreview.vue';

export default {
  components: {
    'app-project-preview': ProjectPreview,
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
    hasDataToDisplay() {
      return this.$store.getters.projects.length !== 0;
    },
  },
};
</script>

<style lang="css">
  .cards {
    display: flex;
    justify-content: center;
  }
  .cards-pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
