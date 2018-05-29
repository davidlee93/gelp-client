import React from "react";
import { shallow } from "enzyme";
import { Error } from "./index";

describe("<Error />", () => {
  it("Should render without crashing", () => {
    shallow(<Error />);
  });
});
