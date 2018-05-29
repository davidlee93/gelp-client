import React from "react";
import { shallow } from "enzyme";
import SearchResultsInfo from "./index";

describe("<SearchResultsInfo />", () => {
  it("Should render without crashing", () => {
    const info = { vicinity: "" };
    shallow(<SearchResultsInfo info={info} />);
  });
});
