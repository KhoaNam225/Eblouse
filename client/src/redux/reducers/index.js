import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./users.reducers";
import reviewsReducer from "./reviews.reducers";
import clinicsReducer from "./clinics.reducer";
import bookingsReducer from "./bookings.reducers";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  reviews: reviewsReducer,
  clinics: clinicsReducer,
  bookings: bookingsReducer,
});
