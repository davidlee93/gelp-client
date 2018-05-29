import React from "react";
import { shallow } from "enzyme";
import Logo from "./index";

describe("<Logo />", () => {
  it("Should render without crashing", () => {
    shallow(<Logo />);
  });
});
