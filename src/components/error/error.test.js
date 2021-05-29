import React from "react";
import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Error from "./error";
import { Provider } from "react-redux";
import store from "../../redux/store";
describe(`<Error />`, () => {
  it("should render Error", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Error />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
