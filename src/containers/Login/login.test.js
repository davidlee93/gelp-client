import React from "react";
import { shallow } from "enzyme";
import { Login } from "./index";

describe("<Login />", () => {
  it("Should render without crashing", () => {
    shallow(<Login />);
  });
});
