import React from "react";
import { shallow } from "enzyme";
import { Rate } from "./index";

describe("<Rate />", () => {
  it("Should render without crashing", () => {
    shallow(<Rate />);
  });
});
