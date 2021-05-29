import React from "react";
import { mount, configure, shallow } from "enzyme";
import ReviewsContainer from "./reviews-container";
import toJson from "enzyme-to-json";
import * as reactRedux from "react-redux";
import { RESULTS } from "./mocked_results";
import Loading from "../../components/loading/loading.component";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const mockStore = configureMockStore([thunk]);
import renderer from "react-test-renderer";

describe(`<ReviewsContainer />`, () => {
  it("should render ReviewsContainer", () => {
    const store = mockStore({
      app: {
        RESULTS: RESULTS,
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <ReviewsContainer />
      </Provider>
    );
    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
