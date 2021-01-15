import * as types from "../constants/reviews.constants";
import api from "../../apiService";
import routeActions from "../actions/route.actions";
import { toast } from "react-toastify";

const getReview = (clinicId, pageNum = 1, limit = 10) => async (dispatch) => {
  dispatch({ type: types.GET_REVIEWS_REQUEST, payload: null });
  try {
    const res = await api.get(`/review/clinic/${clinicId}`);
    dispatch({
      type: types.GET_REVIEWS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ types: types.GET_REVIEWS_FAILURE, payload: error });
  }
};
const getRandomReviews = () => async (dispatch) => {
  dispatch({ type: types.GET_RANDOM_REVIEWS_REQUEST, payload: null });
  try {
    const respond = await api.get("/review/");
    const reviews = respond.data.data;

    dispatch({ type: types.GET_RANDOM_REVIEWS_SUCCESS, payload: reviews });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_RANDOM_REVIEWS_FAILURE, payload: null });
  }
};

const editReviews = (reviewId, content, accessToken) => async (dispatch) => {
  dispatch({ type: types.EDIT_REVIEW_REQUEST, payload: null });
  try {
    const body = { content: content };
    const header = { Authorization: `Bearer ${accessToken}` };
    const res = await api.put(`/review/${reviewId}`, body, {
      headers: header,
    });
    dispatch({ type: types.EDIT_REVIEW_SUCCESS, payload: null });
    toast.success("Review edited");
  } catch (error) {
    toast.error("Error when eidt review");
    dispatch({ type: types.EDIT_REVIEW_FAILURE, payload: error });
  }
};

const deleteReviews = (reviewId, accessToken) => async (dispatch) => {
  try {
    const header = {
      Authorization: `Bearer ${accessToken}`,
    };
    const res = await api.delete(`review/${reviewId}`, { headers: header });
    dispatch({ type: types.DELETE_REVIEW_SUCCESS, payload: null });
    toast.success("Review deleted");
  } catch (error) {
    toast.error("Error when deleting reviews...:()");
    dispatch({ type: types.DELETE_REVIEW_FAILURE, payload: error });
  }
};

const createReviews = (clinicId, reviewText) => async (dispatch) => {
  dispatch({ type: types.CREATE_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.post(`/review/clinic/:${clinicId}`, {
      content: reviewText,
    });
    dispatch({
      type: types.CREATE_REVIEW_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_REVIEW_SUCCESS, payload: error });
  }
};

const reviewActions = {
  getReview,
  getRandomReviews,
  createReviews,
  editReviews,
  deleteReviews,
};
export default reviewActions;
