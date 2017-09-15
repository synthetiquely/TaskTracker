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
    },
  },
};
