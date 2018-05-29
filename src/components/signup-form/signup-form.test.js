import React from "react";
import { shallow } from "enzyme";
import SignupForm from "./index";

describe("<SignupForm />", () => {
  it("Should render without crashing", () => {
    shallow(<SignupForm />);
  });
});
