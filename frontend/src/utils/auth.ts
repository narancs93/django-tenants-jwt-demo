import useStore from "../stores/appStore";
import api from "../utils/api";
import axios from "axios";

export const login = async (username: string, password: string) => {
  try {
    const { data, status } = await api.post("api/token/", {
      username: username,
      password: password,
    });

    if (status === 200) {
      setAuthUser(data.access);
    }
    return { data, error: null };
  } catch (error) {
    let errorMessage = null;
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.detail;
    } else {
      errorMessage = "Something went wrong";
    }
    return {
      data: null,
      error: errorMessage,
    };
  }
};

export const logout = async () => {
  useStore.getState().api?.logout();
};

export const setAuthUser = (accessToken: string) => {
  useStore.getState().api?.setAuth(accessToken);
};

export const refreshAccessToken = async () => {
  const response = await api.post("api/token/refresh/");
  return response.data;
};
