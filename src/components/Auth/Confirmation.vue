<template lang="html">
  <div>
    <div v-if="loading" class="ui icon message">
      <i class="notched circle loading icon"></i>
      <div class="content">
        <div class="header">
          Just one second
        </div>
        <p>We're validating email.</p>
      </div>
    </div>
    <div v-if="!loading && !error" class="ui icon success message">
      <i class="checkmark icon"></i>
      <div class="content">
        <div class="header">
          Thank you. Your account has been verified.
        </div>
        <router-link to="/">Return to Home</router-link>
      </div>
    </div>
    <div v-if="!loading && error" class="ui icon negative message">
      <i class="checkmark icon"></i>
      <div class="content">
        <div class="header">
          Oops. Invalid token it seems.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['token'],
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    },
  },
  created() {
    this.$store.dispatch('confirmEmail', this.token);
  },
};
</script>
