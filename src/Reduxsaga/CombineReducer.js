import { combineReducers } from "redux";
import todoReducer from './Todo/Sagareducer'
const rootReducer = combineReducers({
    todo:todoReducer
})

export default rootReducer