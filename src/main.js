import Vue from 'vue';
import 'semantic-ui-css/semantic.min.css';
import decode from 'jwt-decode';
import App from './App.vue';
import router from './router';
import store from './store';
import InlineError from './components/Common/InlineError.vue';
import NoData from './components/Common/NoData.vue';

/* eslint-disable no-new */

Vue.component('inline-error', InlineError);
Vue.component('app-nodata', NoData);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    if (localStorage.JWT) {
      const payload = decode(localStorage.JWT);
      const user = {
        name: payload.name,
        email: payload.email,
        confirmed: payload.confirmed,
        token: localStorage.JWT,
      };
      this.$store.dispatch('autoSignin', user);
      this.$store.dispatch('loadProjects');
    }
  },
});
