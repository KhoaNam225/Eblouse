import * as types from "../constants/clinics.constants";

const initialState = {
  isLoading: false,
  clinic: null,
};

const clinicsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CLINIC_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_CLINIC_SUCCESS:
      return { ...state, isLoading: false, clinic: payload };

    case types.GET_CLINIC_FAILURE:
      return { ...state, isLoading: false };

    default:
      return { ...state };
  }
};

export default clinicsReducer;
