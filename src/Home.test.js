import React from 'react';
import Home, {StyledImage} from './Home';
import {shallow} from 'enzyme';

const props = {
  homepage:{
    "heading": "Qantas Cars",
    "subheading": "Powered by the sun with the best safety record on the planet",
    "heroImageUrl": "https://drive.google.com/uc?id=1svw9VdyX4fyRHd1kggq0akDSafmdOS7L"
  }
};

it('renders without crashing', () => {
  const wrapper = shallow(<Home {...props}/>);
  expect(wrapper.find('h1').text()).toEqual('Qantas Cars');
  expect(wrapper.find('h2').text()).toEqual('Powered by the sun with the best safety record on the planet');
  expect(wrapper.find(StyledImage).props().src).toEqual('https://drive.google.com/uc?id=1svw9VdyX4fyRHd1kggq0akDSafmdOS7L');
  expect(wrapper.find('LinkContainer').props().to).toEqual('/faqs');
  expect(wrapper.find('Button').html()).toContain('Learn more');
});
