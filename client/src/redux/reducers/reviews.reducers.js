import * as types from "../constants/reviews.constants";

const initialState = {
  pageNum: 1,
  isLoading: false,
  reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_REVIEWS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_REVIEWS_SUCCESS:
      return { ...state, isLoading: false, reviews: payload };
    case types.GET_REVIEWS_FAILURE:
      return { ...state, isLoading: false };

    case types.CREATE_REVIEW_REQUEST:
      return { ...state, isLoading: true };
    case type.CREATE_REVIEW_SUCCESS:
      return { ...state, isLoading: false };
    case type.CREATE_REVIEW_FAILURE:
      return { ...state, isLoading: false };

    case types.EDIT_REVIEW_REQUEST:
      return { ...state, isLoading: true };
    case types.EDIT_REVIEW_SUCCESS:
      return { ...state, isLoading: false };
    case types.EDIT_REVIEW_FAILURE:
      return { ...state, islLoading: false };

    case types.DELETE_REVIEW_REQUEST:
      return { ...state, isLoading: true };
    case types.DELETE_REVIEW_SUCCESS:
      return { ...state, isLoading: false };
    case types.DELETE_REVIEW_FAILURE:
      return { ...state, islLoading: false };

    default:
      return { ...state };
  }
};

export default reviewsReducer;
