import useStore from "../stores/appStore";
import api from "./api";
import axios from "axios";

const apiPort = 8000
const baseURL = `${window.location.protocol}//${window.location.hostname}:${apiPort}`;

export async function refreshAccessToken(setAuth: (token: string) => void) {
  try {
    const response = await api.post(
      `${baseURL}/api/token/refresh/`
    );
    const accessToken = response.data.access;
    setAuth(accessToken);
    return accessToken;
  } catch (error) {
    return await Promise.reject(error);
  }
}

const useApi = () => {
  const { auth, api: storeApi } = useStore();

  const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (
        error.response &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        try {
          const newToken = await refreshAccessToken(storeApi.setAuth);
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return await axios(originalRequest);
        } catch (error_1) {
          return await Promise.reject(error_1);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useApi;
