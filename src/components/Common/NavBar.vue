<template lang="html">
  <nav>
    <div class="ui menu">
      <div class="header item">
        Task Tracker
      </div>
      <router-link
      v-for="route of appRoutes"
        :to="route.path"
        :key="route.path"
        class="item teal"
        exact-active-class="active"
      >
        {{route.name}}
      </router-link>
      <router-link
        v-for="route of guestRoutes"
        :to="route.path"
        :key="route.path"
        class="item teal"
        exact-active-class="active"
      >
        {{route.name}}
      </router-link>
    </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      appRoutes: [
        {
          name: 'Home',
          path: '/',
        },
      ],
      guestRoutes: [
        {
          name: 'Sign up',
          path: '/user/signup',
        },
        {
          name: 'Sign in',
          path: '/user/signin',
        },
      ],
    };
  },
};
</script>

<style lang="css">
nav {
  margin-bottom: 15px;
}
</style>
