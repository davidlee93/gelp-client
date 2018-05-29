import React from "react";
import { shallow } from "enzyme";
import SearchResults from "./index";

describe("<SearchResults />", () => {
  it("Should render without crashing", () => {
    shallow(<SearchResults />);
  });
});
