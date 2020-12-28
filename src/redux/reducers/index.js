import { combineReducers } from "redux";
import reviewsReducer from "./reviews.reducers";

export default combineReducers({
  reviews: reviewsReducer,
});
