import React from "react";
import { shallow } from "enzyme";
import { DemoForm } from "./index";

describe("<DemoForm />", () => {
  it("Should render without crashing", () => {
    shallow(<DemoForm />);
  });
});
