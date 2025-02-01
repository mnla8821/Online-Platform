import axios from "axios";
import axiosRetry from "axios-retry";
import Cookies from "js-cookies";

export const PublicAxios = axios.create({
  baseURL: "https://nebot.synked.cloud/api",
  // timeout: 2000 ,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

axiosRetry(PublicAxios, {
  retries: 8000, // عدد مرات إعادة المحاولة
  retryDelay: axiosRetry.exponentialDelay, // تأخير بين كل محاولة
  retryCondition: (error) => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error);
  },
});

PublicAxios.interceptors.request.use(
  async (c) => {
    let token = Cookies.getItem("token");
    if (token) c.headers.Authorization = `Bearer ${token}`;
    return c;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Moodle
