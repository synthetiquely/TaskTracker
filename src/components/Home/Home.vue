<template lang="html">
  <div>
    <p>Home Page</p>
    <div v-if="!userConfirmedEmail" class="ui icon info message">
      <i class="open envelope outline icon"></i>
      <div class="content">
        <div class="header">
          Confirm your email
        </div>
        <p>Please confirm your email so that you can access private features of the service.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userConfirmedEmail() {
      return this.$store.getters.user.confirmed;
    },
  },
};
</script>
