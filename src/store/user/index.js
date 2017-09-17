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
        .then((response) => {
          commit('setUser', response.data.user);
          commit('setLoading', false);
        })
        .catch((err) => {
          commit('setLoading', false);
          commit('setError', err.response.data.error.message);
        });
    },
  },
};
