import appReducer from "./app.reducer";
import AppActionTypes from "./app.types";

const INITIAL_STATE = {
  SHOW_LOADING: false,
  ERROR: "",
  RESULTS: {
    page: 1,
    data: [],
    count: 0,
    limit: 5,
    has_more: true,
  },
};

describe("App reducer", () => {
  it("should return the initial state", () => {
    expect(appReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should set SHOW_LOADING to true on fetch_START", () => {
    expect(
      appReducer(INITIAL_STATE, {
        type: AppActionTypes.fetch_START,
        SHOW_LOADING: true,
      })
    ).toEqual({ ...INITIAL_STATE, SHOW_LOADING: true });
  });

  it("should set RESULTS and COUNT  on fetch_SUCCESS", () => {
    const reviews = [
      {
        author: "Kaisha Melton",
        channel: "HOLIDU",
        comment:
          "Phasellus id massa et ligula lobortis sollicitudin eu vel erat. Suspendisse faucibus aliquam dui, vel ultricies nulla fringilla nec. Nam mauris sapien, eleifend id finibus et, sollicitudin a velit.",
        headline: "Lovely finca",
        negativeFeedback: "Not the most central location.",
        positiveFeedback: "Yummy breakfast",
        publishedAt: "2020-08-11T12:20:02.340Z",
        score: 4.2,
      },
    ];
    expect(
      appReducer(INITIAL_STATE, {
        type: AppActionTypes.fetch_SUCCESS,
        payload: { reviews, page: 1, clear: true },
      })
    ).toEqual({
      ...INITIAL_STATE,
      SHOW_LOADING: false,
      ERROR: "",
      RESULTS: {
        data: reviews,
        count: 1,
        page: 1,
        has_more: true,
        limit: 5,
      },
    });
  });

  it("should set ERROR to error value on fetch_FAILURE", () => {
    expect(
      appReducer(INITIAL_STATE, {
        type: AppActionTypes.fetch_FAILURE,
      })
    ).toEqual({ ...INITIAL_STATE, SHOW_LOADING: false, ERROR: "Error" });
  });
});
