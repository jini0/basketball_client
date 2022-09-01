import { combineReducers } from "redux";
import logincheck from "./logincheck";


const rootReducer = combineReducers({ logincheck })  // 합칠때, 추가해주기
export default rootReducer;