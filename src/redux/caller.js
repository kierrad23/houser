import axios from "axios";

export const getHouses = function() {
  return axios.get("/api/listings").then(res => console.log(res.data));
};
