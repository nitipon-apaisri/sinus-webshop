import axios from 'axios';

axios.defaults.headers.common["Authorization"] = sessionStorage.getItem("user");

const instance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default instance;

