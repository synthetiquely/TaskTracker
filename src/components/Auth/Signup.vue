<template lang="html">
  <div class="ui raised very padded text container segment">
    <div class="ui attached message">
      <div class="header">
        Sign up
      </div>
      <p>Fill out the form below to sign-up for a new account</p>
    </div>
      <form @submit.prevent="submit" class="ui form attached fluid segment" :class="{loading: loading, error: formError}">
        <div class="field required" :class="{error: errors.name}">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            v-model="name"

          >
          <inline-error v-if="errors.name" :text="errors.name"></inline-error>
        </div>
        <div class="field required" :class="{error: errors.email}">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            v-model="email"

          >
          <inline-error v-if="errors.email" :text="errors.email"></inline-error>
        </div>
        <div class="field required" :class="{error: errors.password}">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            v-model="password"

          >
          <inline-error v-if="errors.password" :text="errors.password"></inline-error>
        </div>
        <div class="field required" :class="{error: errors.role}">
          <label for="role">Role</label>
          <select name="role" id="role" v-model="role" >
            <option selected disabled hidden>Choose your role</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
          </select>
          <inline-error v-if="errors.role" :text="errors.role"></inline-error>
        </div>
        <button
          type="submit"
          class="ui button"
        >
          Submit
        </button>
        <div class="ui error message">
          <p>{{formError}}</p>
        </div>
      </form>
      <div class="ui bottom attached info message">
        <i class="icon help"></i>
        Already signed up? <router-link to="/user/signin">Sign in here</router-link> instead.
      </div>
  </div>
</template>

<script>
import validator from 'validator';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      role: 'Choose your role',
      errors: {},
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    },
    formError() {
      return this.$store.getters.error;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/');
      }
    },
  },
  methods: {
    validate() {
      const errors = {};
      if (!validator.isEmail(this.email)) {
        errors.email = 'Ivalid email';
      }
      if (!this.password) {
        errors.password = 'Can\'t be empty';
      }
      if (!this.name) {
        errors.name = 'Can\'t be empty';
      }
      if (this.role === 'Choose your role') {
        errors.role = 'Please choose role from the above';
      }
      return errors;
    },
    submit() {
      const errors = this.validate();
      this.errors = errors;
      if (Object.keys(errors).length === 0) {
        this.$store.dispatch('signup', {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role,
        });
      }
    },
  },
};
</script>
