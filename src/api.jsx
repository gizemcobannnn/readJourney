import axios from "axios";

const api = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export const setTokenA = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("tokenReading", JSON.stringify(token));
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
