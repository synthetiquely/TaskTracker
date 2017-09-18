import api from '../../api';

/* eslint-disable no-param-reassign */

export default {
  state: {
    projects: [],
  },
  actions: {
    createNewProject({ commit, getters }, payload) {
      commit('setLoading', true);
      const newProject = {
        title: payload.title,
        description: payload.description,
        avatar: payload.imageUrl,
        creator: getters.user.email,
      };
      api.project.createNewProject(newProject).then((response) => {
        const {
          _id, title, avatar, description, _creator, teamMembers, updatedAt,
        } = response.data.project;
        commit('createNewProject', {
          title,
          description,
          avatar,
          updatedAt,
          _id,
          _creator,
          tasksCompleted: 0,
          tasksTotal: 0,
          teamMembers: teamMembers.length,
        });
        commit('setLoading', false);
      }).catch((err) => {
        commit('setLoading', false);
        commit('setError', err.response.data.error);
      });
    },
    // TODO: Tasks counter and team members counter and loading spinner
    loadProjects({ commit, getters }) {
      commit('setLoading', true);
      api.project.loadProjects(getters.user.email)
        .then((response) => {
          commit('setLoading', false);
          commit('loadProjects', response.data.projects);
        })
        .catch((err) => {
          commit('setLoading', false);
          commit('setError', err.response.data.error);
        });
    },
  },
  mutations: {
    createNewProject(state, payload) {
      state.projects.push(payload);
    },
    loadProjects(state, payload) {
      state.projects = payload;
    },
  },
  getters: {
    projects(state) {
      return state.projects.sort((projectA, projectB) =>
        projectA.updatedAt > projectB.updatedAt);
    },
    project(state) {
      return projectId => state.projects.find(project => project.id === projectId);
    },
  },
};
