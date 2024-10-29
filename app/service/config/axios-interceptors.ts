import axios from "axios";
import { getData } from "../storeData";
import { STORAGE_KEY } from "@/app/constants/StorageKey";
import { API_KEY } from "@/app/constants/apiKey";
const baseURL = "https://newsapi.org/v2";

export const axiosInterceptors = axios.create({
  baseURL,
});

axiosInterceptors.interceptors.request.use(async function (config) {
  const token = await getData(STORAGE_KEY.TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers["Content-Type"] = "application/json";
  config.params = {
    apiKey: API_KEY,
    country: "us",
  };
  return config;
});

axiosInterceptors.interceptors.response.use(function (response) {
  console.log(response);
  return response;
});
