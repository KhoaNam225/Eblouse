import * as types from "../constants/clinics.constants";

const initialState = {
  isLoading: false,
  clinic: null,
  listClinic: [],
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

    case types.GET_ALL_CLINICS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_ALL_CLINICS_SUCCESS:
      return { ...state, listClinic: payload.listClinic, isLoading: false };
    case types.GET_ALL_CLINICS_FAILURE:
      return { ...state, isLoading: false };

    case types.GET_SEARCH_REQUEST:
      return { ...state, clinics: [], isLoading: true };
    case types.GET_SEARCH_SUCCESS:
      return { ...state, clinics: payload, isLoading: false };
    case types.GET_SEARCH_FAILURE:
      return { ...state, clinics: [], isLoading: false };

    default:
      return { ...state };
  }
};

export default clinicsReducer;
