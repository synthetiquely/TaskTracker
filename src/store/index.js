import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import project from './project';
import shared from './shared';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    project,
    shared,
  },
});
