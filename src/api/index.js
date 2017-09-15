export default {
  user: {
    signup: data =>
      fetch('http://localhost:8081/api/user/signup', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
      })
        .then(response => response.json()),
  },
};
