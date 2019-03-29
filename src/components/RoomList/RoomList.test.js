import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Route, Link, MemoryRouter } from "react-router-dom";

import RoomList from "./RoomList";

describe("<RoomList />", () => {
  it("Renders without crashing", () => {
    shallow(<RoomList />);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <RoomList />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
