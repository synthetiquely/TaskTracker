import axios from 'axios';

const apiUrl = 'http://localhost:8081/api/';

export default {
  user: {
    signup: data => axios.post(`${apiUrl}user/signup`, data),
    signin: data => axios.post(`${apiUrl}user/signin`, data),
  },
};
