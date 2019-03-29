import React from 'react';
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";


import CreateRoomForm from './CreateRoomForm';

describe('<CreateRoomForm />', () => {

  it('Renders without crashing', () => {
    shallow(<CreateRoomForm />)
  })

  it("renders correctly", () => {
    const tree = renderer.create(<CreateRoomForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //implement mocking
  //https://medium.com/@rishabhsrao/mocking-and-testing-fetch-with-jest-c4d670e2e167

})