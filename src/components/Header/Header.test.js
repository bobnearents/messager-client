import React from 'react';
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";
import { Route, Link, MemoryRouter } from "react-router-dom";


import Header from './Header';

describe('<Header />', () => {

  it('Renders without crashing', () => {
    shallow(<Header />)
  })

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})