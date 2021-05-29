import React from "react";
import { configure, shallow } from "enzyme";
import TopHeader from "./TopHeader.component";
import toJson from "enzyme-to-json";
describe(`<TopHeader />`, () => {
  it("should render TopHeader", () => {
    const wrapper = shallow(<TopHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
