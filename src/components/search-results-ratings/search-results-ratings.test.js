import React from "react";
import { shallow } from "enzyme";
import SearchResultsRatings from "./index";

describe("<SearchResultsRatings />", () => {
  it("Should render without crashing", () => {
    const info = { avgRating: "" };
    shallow(<SearchResultsRatings info={info} />);
  });
});
