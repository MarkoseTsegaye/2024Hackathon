import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://scenario-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/98826f34-733b-4c85-91b7-226669daa315/classify/iterations/Hazard%20Detection/image";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;