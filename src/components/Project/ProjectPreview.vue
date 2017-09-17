<template lang="html">
    <div class="pink card" @click="seeDetails">
      <div class="image">
        <img :src="project.avatar" alt="avatar">
      </div>
      <div class="content">
        <div class="header">
          {{project.title}}
        </div>
        <div class="meta">
          {{project._creator}}
        </div>
        <div class="description">
          {{project.description}}
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
          <i class="tasks icon"></i>
          {{project.tasksCompleted}} of {{project.tasksTotal}}
        </span>
        <span>
          <i class="user icon"></i>
          {{project.teamMembers}} Members
        </span>
      </div>
    </div>
</template>

<script>
export default {
  props: ['project'],
  methods: {
    seeDetails() {
      this.$router.push(`/projects/${this.project.id}`);
    },
  },
};
</script>
