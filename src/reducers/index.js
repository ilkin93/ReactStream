import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authreducer";
import streamReducer from './streamReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
