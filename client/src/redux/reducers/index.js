import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import reviewsReducer from "./reviews.reducers";
import clinicsReducer from "./clinics.reducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  reviews: reviewsReducer,
  clinics: clinicsReducer,
});
