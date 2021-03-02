import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:5000/api" });
const userToken = sessionStorage.getItem("user");
api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
export default api;
