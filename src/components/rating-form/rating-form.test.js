import React from "react";
import { shallow } from "enzyme";
import { RatingForm } from "./index";

describe("<RatingForm />", () => {
  it("Should render without crashing", () => {
    shallow(<RatingForm />);
  });
});
