import { combineReducers } from "redux";
import logincheck from "./logincheck";
import counter from "./counter";


const rootReducer = combineReducers({ logincheck, counter })  // 합칠때, 추가해주기
export default rootReducer;