import React from "react";
import { shallow, mount } from "enzyme";
import { SearchBar } from "./index";

describe("<SearchBar />", () => {
  it("Should render without crashing", () => {
    shallow(<SearchBar />);
  });
  it("Should keep the input when the form is submitted", () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="text"]');
    input.instance().value = "berkeley";
    wrapper.simulate("submit");
    expect(input.instance().value).toEqual("berkeley");
  });
});
