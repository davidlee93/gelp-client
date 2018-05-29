import React from "react";
import { shallow } from "enzyme";
import SearchFiller from "./index";

describe("<SearchFiller />", () => {
  it("Should render without crashing", () => {
    shallow(<SearchFiller />);
  });
});
