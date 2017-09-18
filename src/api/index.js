import axios from 'axios';

const apiUrl = 'http://localhost:8081/api';

export default {
  user: {
    signup: data => axios.post(`${apiUrl}/user/signup`, data),
    signin: data => axios.post(`${apiUrl}/user/signin`, data),
    confirm: token => axios.post(`${apiUrl}/user/confirmation`, { token }),
  },
  project: {
    createNewProject: data => axios.post(`${apiUrl}/project/new`, data),
    loadProjects: userEmail => axios.post(`${apiUrl}/projects`, { email: userEmail }),
  },
};
