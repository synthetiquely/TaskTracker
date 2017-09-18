import api from '../../api';

/* eslint-disable no-param-reassign */

export default {
  state: {
    projects: [
      {
        id: '1',
        title: 'Task Tracker Node.js',
        avatar: 'https://avatars1.githubusercontent.com/u/9950313?v=4&s=400',
        description: 'Task Tracker Server Side built with KoaJS',
        creator: 'Maxim',
        teamMembers: 11,
        tasksCompleted: 73,
        tasksTotal: 110,
        updatedAt: Date.now(),
      }, {
        id: '2',
        title: 'Task Tracker Ruby on Rails',
        avatar: 'http://www.inovawebdesign.com/wp-content/uploads/2015/01/rails.png',
        description: 'Task Tracker built with pure Ruby on Rails',
        creator: 'Oleg',
        teamMembers: 14,
        tasksCompleted: 65,
        tasksTotal: 110,
        updatedAt: Date.now(),
      }, {
        id: '3',
        title: 'Task Tracker VueJS',
        avatar: 'https://vuejs.org/images/logo.png',
        description: 'Task Tracker Client Side built with VueJS',
        creator: 'Maxim',
        teamMembers: 6,
        tasksCompleted: 34,
        tasksTotal: 56,
        updatedAt: Date.now(),
      },
    ],
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
          id: _id,
          creator: _creator,
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
  },
  mutations: {
    createNewProject(state, payload) {
      state.projects.push(payload);
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
