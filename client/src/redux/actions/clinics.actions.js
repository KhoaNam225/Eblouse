import api from "../../apiService";
import * as types from "../constants/clinics.constants";
import { toast } from "react-toastify";
import routeActions from "../actions/route.actions";

const getClinic = (clinicId) => async (dispatch) => {
  dispatch({ type: types.GET_CLINIC_REQUEST, payload: null });
  try {
    const response = await api.get(`/clinic/${clinicId}`);
    const clinic = response.data.data;
    console.log(clinic);
    dispatch({ type: types.GET_CLINIC_SUCCESS, payload: clinic });
  } catch (error) {
    dispatch({ type: types.GET_CLINIC_FAILURE, payload: null });
    toast.error(error);
  }
};

const getAllClinic = () => async (dispatch) => {
  dispatch({ type: types.GET_ALL_CLINICS_REQUEST, payload: null });
  try {
    const res = await api.get(`/clinic/`);

    dispatch({
      type: types.GET_ALL_CLINICS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_ALL_CLINICS_FAILURE, payload: null });
    toast.error(error);
  }
};

const getSearchCategory = (
  pageNum = 1,
  limit = 10,
  query = null,
  sortBy = null
) => async (dispatch) => {
  dispatch({ type: types.GET_SEARCH_REQUEST, payload: null });
  try {
    //
    let queryString = "";
    if (query) {
      queryString = `&search[$regex]=${query}&search[$options]=i`;
    }
    let sortByString = "";
    if (sortBy?.key) {
      sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
    }
    const res = await api.get(
      `/search?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
    );
    dispatch({ type: types.GET_SEARCH_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_SEARCH_FAILURE, payload: error });
  }
};

const clinicsActions = {
  getClinic,
  getAllClinic,
  getSearchCategory,
};

export default clinicsActions;
