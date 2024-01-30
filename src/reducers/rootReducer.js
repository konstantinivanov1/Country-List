import { combineReducers } from "redux";
import countryReducer from "./countryReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    country: countryReducer,
    filter: filterReducer
})

export default rootReducer;