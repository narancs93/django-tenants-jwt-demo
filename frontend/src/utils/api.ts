import axios from "axios";

const apiPort = 8000
const baseURL = `${window.location.protocol}//${window.location.hostname}:${apiPort}`;

const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export default api;
