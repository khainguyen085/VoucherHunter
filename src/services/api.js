import axios from "axios";

const baseURL = "https://voucher-hunter.herokuapp.com/api";
// const baseURL = "http://localhost:8080/api";

const API = {
  async loadUser() {
    const response = await axios.get(`${baseURL}/auth`);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async signup(userInfo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(`${baseURL}/user`, userInfo, config);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async login(loginInfo) {
    const response = await axios.post(`${baseURL}/auth`, loginInfo);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async googleLogin(idToken) {
    const response = await axios.post(`${baseURL}/auth/google`, { idToken });

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
};

export default API;
