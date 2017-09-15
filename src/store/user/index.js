import api from '../../api';

/* eslint-disable no-param-reassign  */

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    signup({ commit }, payload) {
      // TODO: Implement sign up request
      commit('setLoading', true);
      commit('clearError');
      api.user.signup(payload)
        .then((user) => {
          commit('setUser', user);
          commit('setLoading', false);
        })
        .catch((err) => {
          commit('setLoading', false);
          console.log(err);
        });
    },
  },
};
