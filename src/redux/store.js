import { createStore, applyMiddleware } from "redux";
import rpromise from "redux-promise-middleware";
import reducer from "./reducer";

export default createStore(reducer, applyMiddleware(rpromise));
