import React from "react";
import { shallow } from "enzyme";
import PlaceDetailInfo from "./index";

describe("<PlaceDetailInfo />", () => {
  it("Should render without crashing", () => {
    shallow(<PlaceDetailInfo />);
  });
});
