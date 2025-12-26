import axios from "axios";

const baseUrlRender = "";

const baseUrlSwagger = "";

const myAxios = axios.create({
  baseURL: baseUrlRender,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export { myAxios };
