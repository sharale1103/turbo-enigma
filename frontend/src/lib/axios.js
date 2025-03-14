import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://turbo-enigma-4pjxww6vwwqc5x7p-2002.app.github.dev/api" ,
  withCredentials: true,
});