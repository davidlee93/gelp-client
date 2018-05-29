import React from "react";
import { shallow } from "enzyme";
import SearchLogo from "./index";

describe("<SearchLogo />", () => {
  it("Should render without crashing", () => {
    shallow(<SearchLogo />);
  });
});
