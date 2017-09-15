<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Task Tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-for="route of appRoutes">
        <router-link class="nav-link" :to="route.path" >{{route.name}}</router-link>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" v-for="route of guestRoutes">
        <router-link class="nav-link" :to="route.path" >{{route.name}}</router-link>
      </li>
    </ul>
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
</style>
