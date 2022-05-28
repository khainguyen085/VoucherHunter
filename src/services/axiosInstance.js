import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://localhost:8000",
});

export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axiosInstance.defaults.headers.common["x-auth-token"];
  }
};
