import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Route, Link, MemoryRouter } from "react-router-dom";

import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  it("Renders without crashing", () => {
    shallow(<LoginForm />);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
