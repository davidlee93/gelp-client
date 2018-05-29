import React from "react";
import { shallow } from "enzyme";
import { Filter } from "./index";

describe("<Filter />", () => {
  it("Should render without crashing", () => {
    shallow(<Filter />);
  });
});
