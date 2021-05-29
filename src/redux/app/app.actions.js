import AppActionTypes from "./app.types";
import { getRequest } from "../../utils/requests";

export const fetchStart = () => ({
  type: AppActionTypes.FETCH_START,
});

export const fetchSuccess = (data, page) => ({
  type: AppActionTypes.FETCH_SUCCESS,
  payload: { data, page },
});

export const fetchmenuDisplaySuccess = (data) => ({
  type: AppActionTypes.FETCH_MENU_DISPLAY_SUCCESS,
  payload: { data },
});

export const fetchmenuCategorySuccess = (data) => ({
  type: AppActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: { data },
});

export const fetchFilteredData = (data) => ({
  type: AppActionTypes.FETCH_FILTERED_SUCCESS,
  payload: { data },
});

export const fetchDataFailure = () => ({
  type: AppActionTypes.FETCH_FAILURE,
});

export const noMoreDataRetrieved = () => ({
  type: AppActionTypes.NO_MORE_DATA_RETRIEVED,
});

export const clearApiResults = () => ({
  type: AppActionTypes.CLEAR_API_RESULTS,
});

export const fetchStartAsync = (endpoint, page) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    let result = await getRequest(endpoint, page);
    console.log("retrieved Data", result);
    if (result.data) {
      if (endpoint == "menu_display") {
        console.log("fetchmenuDisplaySuccess", result.data);
        dispatch(fetchmenuDisplaySuccess(result.data));
      } else if (endpoint == "categories") {
        dispatch(fetchmenuCategorySuccess(result.data));
      } else {
        dispatch(fetchSuccess(result.data, page));
      }
    } else {
      dispatch(fetchDataFailure());
    }
  };
};
