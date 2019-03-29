import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import TextInput from "./TextInput";

describe("<TextInput />", () => {
  it("Renders without crashing", () => {
    shallow(<TextInput />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<TextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
