import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import MessageList from "./MessageList";

describe("<MessageList />", () => {
  it("Renders without crashing", () => {
    shallow(<MessageList />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<MessageList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
