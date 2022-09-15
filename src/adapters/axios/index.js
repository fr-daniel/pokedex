import axios from "axios";
import { AXIOS_BASE_URL } from "../xhr";

const returnAxiosInstance = () => {
  return axios.create({
    baseURL: AXIOS_BASE_URL,
    timeout: 1000,
  });
}

export const get = (url) => {
  const axios = returnAxiosInstance();
  return axios.get(url);
}
