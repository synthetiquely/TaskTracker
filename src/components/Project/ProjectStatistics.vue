<template>
  <div class="project-stats">
    <h3>Statistics</h3>
    <div class="ui statistics">
      <div class="statistic">
        <div class="value">
          22
        </div>
        <div class="label">
          Open Issues
        </div>
      </div>
      <div class="statistic">
        <div class="value">
          3
        </div>
        <div class="label">
          Team Members
        </div>
      </div>
    </div>
    <div class="ui pink indicating progress" data-value="50" data-total="100" id="project-progress">
      <div class="bar"></div>
      <div class="label">50% Finished</div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  margin-top: 10px !important;
}
</style>

