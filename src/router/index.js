import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home/Home.vue';
import Signup from '../components/Auth/Signup.vue';
import Signin from '../components/Auth/Signin.vue';
import Confirmation from '../components/Auth/Confirmation.vue';
import ProjectDetails from '../components/Project/ProjectDetails.vue';

import AuthGuard from './auth-guard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard,
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
    {
      path: '/user/confirmation/:token',
      name: 'Email Confirmation',
      component: Confirmation,
      props: true,
    },
    {
      path: '/projects/:id',
      name: 'Project Details',
      component: ProjectDetails,
    },
  ],
  mode: 'history',
});
