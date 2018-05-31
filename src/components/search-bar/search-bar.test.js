import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./index";

describe("<SearchBar />", () => {
  it("Should render without crashing", () => {
    shallow(<SearchBar />);
  });
});
