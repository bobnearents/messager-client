import React from 'react';
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";

import Message from './Message';

describe('<Message />', () => {
  
  it('Renders without crashing', () => {
    shallow(<Message />)
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Message />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('Renders the text', () => {
    const text = "Foo";
    const wrapper = shallow(<Message text={text} />);
    expect(wrapper.text().split(" ")[0]).toEqual(text);
  });

  it("Renders the text", () => {
    const text = "Foo";
    const wrapper = shallow(<Message user={text} />);
    expect(wrapper.text().split(" ")[0]).toEqual(text);
  });



})