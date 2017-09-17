import api from '../../api';

/* eslint-disable no-param-reassign  */

export default {
  state: {
    user: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    signup({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      api.user.signup(payload)
        .then((response) => {
          commit('setUser', response.data.user);
          localStorage.JWT = response.data.user.token;
          commit('setLoading', false);
        })
        .catch((err) => {
          commit('setLoading', false);
          commit('setError', err.response.data.error.message);
        });
    },
    confirmEmail({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      api.user.confirm(payload)
        .then((response) => {
          commit('setUser', response.data.user);
          localStorage.JWT = response.data.user.token;
          commit('setLoading', false);
        })
        .catch((err) => {
          commit('setLoading', false);
          commit('setError', err.response.data.error);
        });
    },
    signin({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      api.user.signin(payload)
        .then((response) => {
          commit('setUser', response.data.user);
          localStorage.JWT = response.data.user.token;
          commit('setLoading', false);
        })
        .catch((err) => {
          commit('setLoading', false);
          commit('setError', err.response.data.error);
        });
    },
    logout({ commit }) {
      localStorage.removeItem('JWT');
      commit('setUser', null);
    },
    autoSignin({ commit }, payload) {
      commit('setUser', {
        name: payload.name,
        email: payload.email,
        confirmed: payload.confirmed,
        token: payload.token,
      });
    },
  },
};
