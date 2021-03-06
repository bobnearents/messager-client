import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Route, Link, MemoryRouter } from "react-router-dom";

import App from "./App";

describe("<App />", () => {
  it("Renders without crashing", () => {
    shallow(<App />);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
