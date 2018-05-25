import React from "react";
import { shallow } from "enzyme";
import { Place } from "./index";

describe("<Place />", () => {
  it("Should render without crashing", () => {
    shallow(<Place />);
  });
});
