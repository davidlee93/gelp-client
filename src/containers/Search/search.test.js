import React from "react";
import { shallow } from "enzyme";
import { Search } from "./index";

describe("<Search />", () => {
  it("Should render without crashing", () => {
    shallow(<Search />);
  });
});
