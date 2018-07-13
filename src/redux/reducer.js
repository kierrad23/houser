import * as caller from "./caller";
import axios from "axios";

const GET_LISTINGS = "GET_LISTINGS";

const initialState = {
  houses: []
};

export function getHouses() {
  console.log("hit");
  return {
    type: GET_LISTINGS,
    payload: axios.get("/api/listings")
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      console.log("test");
      return {
        houses: action.payload
      };
    default:
      return state;
  }
}
