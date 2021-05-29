import React from "react";
import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Loading from "./loading.component";
import { Provider } from "react-redux";
import store from "../../redux/store";
describe(`<Loading />`, () => {
  it("should render Loding", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Loading />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
