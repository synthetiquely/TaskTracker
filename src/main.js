import Vue from 'vue';
import 'semantic-ui-css/semantic.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import InlineError from './components/Common/InlineError.vue';

/* eslint-disable no-new */

Vue.component('inline-error', InlineError);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
