import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  credential: true,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": ["http://localhost:8000"],
  },
});

export default instance;
