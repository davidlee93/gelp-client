import React from "react";
import { shallow } from "enzyme";
import { LogOutBar } from "./index";

describe("<LogOutBar />", () => {
  it("Should render without crashing", () => {
    shallow(<LogOutBar />);
  });
});
