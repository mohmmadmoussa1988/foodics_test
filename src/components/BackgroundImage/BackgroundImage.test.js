import React from "react";
import { configure, shallow } from "enzyme";
import BackgroundImage from "./BackgroundImage.component";
import toJson from "enzyme-to-json";

describe(`<BackgroundImage />`, () => {
  it("should render Background image", () => {
    const wrapper = shallow(<BackgroundImage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
