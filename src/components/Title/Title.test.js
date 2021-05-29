import React from "react";
import { configure, shallow } from "enzyme";
import Title from "./Title";
import toJson from "enzyme-to-json";
describe(`<Title />`, () => {
  it("should render Title", () => {
    const wrapper = shallow(<Title />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
