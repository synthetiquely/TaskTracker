import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home/Home.vue';
import Signup from '../components/Auth/Signup.vue';
import Signin from '../components/Auth/Signin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/user/signin',
      name: 'Signin',
      component: Signin,
    },
  ],
  mode: 'history',
});
