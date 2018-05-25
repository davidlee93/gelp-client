import React from "react";
import { shallow } from "enzyme";
import { Findings } from "./index";

describe("<Findings />", () => {
  it("Should render without crashing", () => {
    shallow(<Findings />);
  });
});
