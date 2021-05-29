import AppActionTypes from "./app.types";
import { getResultsCount, getData } from "../../utils/utils";
const INITIAL_STATE = {
  SHOW_LOADING: false,
  ERROR: "",
  RESULTS: [],
  page: 1,
  Menu_display: [],
  Categories: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.FETCH_START:
      return {
        ...state,
        SHOW_LOADING: true,
      };
    case AppActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        SHOW_LOADING: false,
        ERROR: "",
        RESULTS: {
          ...state.RESULTS,
          data: action.payload.data,
        },
      };
    case AppActionTypes.FETCH_FILTERED_SUCCESS:
      return {
        ...state,
        SHOW_LOADING: false,
        ERROR: "",
        RESULTS: action.payload.data,
      };

    case AppActionTypes.FETCH_MENU_DISPLAY_SUCCESS:
      //console.log("action.payload.data", action.payload.data.data.categories);
      return {
        ...state,
        Menu_display: action.payload.data.data.categories,
      };

    case AppActionTypes.FETCH_CATEGORIES_SUCCESS:
      //console.log("action.payload.data", action.payload.data.data.categories);
      return {
        ...state,
        Categories: action.payload.data.data,
      };

    case AppActionTypes.FETCH_FAILURE:
      return {
        ...state,
        SHOW_LOADING: false,
        ERROR: "Error",
      };
    case AppActionTypes.NO_MORE_DATA_RETRIEVED:
      return {
        ...state,
        SHOW_LOADING: false,
        RESULTS: {
          ...state.RESULTS,
        },
      };

    case AppActionTypes.CLEAR_API_RESULTS:
      return {
        ...state,
        RESULTS: {},
      };

    default:
      return state;
  }
};

export default appReducer;
