<template lang="html">
  <nav>
    <div class="ui menu">
      <div class="header item">
        Task Tracker
      </div>
      <router-link
        v-for="route of routes"
        :to="route.path"
        :key="route.path"
        class="item teal"
        exact-active-class="active"
      >
        {{route.name}}
      </router-link>
      <a v-if="userIsAuthenticated" class="item teal" @click="logout">Logout</a>
    </div>
</nav>
</template>

<script>
export default {
  computed: {
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    },
    routes() {
      let routes = [
        {
          name: 'Sign up',
          path: '/user/signup',
        },
        {
          name: 'Sign in',
          path: '/user/signin',
        },
      ];
      if (this.userIsAuthenticated) {
        routes = [
          {
            name: 'Home',
            path: '/',
          },
          {
            name: 'Profile',
            path: '/profile',
          },
        ];
      }
      return routes;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/user/signin');
    },
  },
};
</script>

<style lang="css">
nav {
  margin-bottom: 15px;
}
</style>
