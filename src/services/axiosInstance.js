import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://team2be.herokuapp.com/",
});

export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axiosInstance.defaults.headers.common["x-auth-token"];
  }
};
