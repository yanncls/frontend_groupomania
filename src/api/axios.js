import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // logout
    if (error.response?.status === 401) {
      console.log("Pas autorisé");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      window.location.reload();
    }
    if (error?.response) {
      console.log("Pas de réponse du serveur");
    }
    console.log(error);
  }
);

export default instance;
