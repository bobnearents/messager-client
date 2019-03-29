import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Route, Link, MemoryRouter } from "react-router-dom";

import SignupForm from "./SignupForm";

describe("<SignupForm />", () => {
  it("Renders without crashing", () => {
    shallow(<SignupForm />);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SignupForm />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
