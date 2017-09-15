<template lang="html">
  <div class="row">
    <div class="col-md-6 mr-md-auto">
      <h3>Sign up</h3>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Enter your name"
            v-model="name"
          >
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Enter your email"
            v-model="email"
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Enter your password"
            v-model="password"
          >
        </div>
        <button
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      return this.$store.dispatch('signup', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
