import { combineReducers } from "redux";
import reviewsReducer from "./reviews.reducers";
import usersReducer from "./users.reducers";
import clinicsReducer from "./clinics.reducer";
import authReducer from "./auth.reducers";
import bookingsReducer from "./bookings.reducers";

export default combineReducers({
  reviews: reviewsReducer,
  users: usersReducer,
  clinics: clinicsReducer,
  auth: authReducer,
  bookings: bookingsReducer,
});
