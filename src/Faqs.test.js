import React from 'react';
import Faqs, {StyledFaqLink} from './Faqs';
import {shallow} from 'enzyme';

const props = {
  faqs:[
    {
      "title": "How can I check my estimated delivery window?",
      "body": "Model 3 reservation holders can check their latest delivery timing estimate in their Tesla Account."
    },
    {
      "title": "When will I be invited to configure my Model 3, and when can I take delivery?",
      "body": "<p>Model 3 reservation holders are receiving invitations to order and design Model 3 based on the time and date that they placed their reservation. Current Tesla owners have priority as a thank you for their support.</p><p>Deliveries will start in the United States first, with international deliveries starting in left-hand drive markets in late 2018, followed by right-hand drive markets in 2019.</p>"
    },
    {
      "title": "Which Model 3 features are currently available?",
      "body": "Our first Model 3 in production comes with a long-range battery, 310 miles of range, rear-wheel drive and premium upgrades throughout, beginning at $49,000 USD. In early 2018, we will introduce the option for a standard battery with 220 miles of range and standard equipment, beginning at $35,000 USD."
    }
  ]
};

it('renders without crashing', () => {
  const wrapper = shallow(<Faqs {...props}/>);
  expect(wrapper.find('h2')).toHaveLength(1);
  expect(wrapper.find('p')).toHaveLength(1);
  expect(wrapper.find(StyledFaqLink)).toHaveLength(3);
  expect(wrapper.find(StyledFaqLink).get(0).props.children).toEqual('How can I check my estimated delivery window?');
  expect(wrapper.find(StyledFaqLink).get(1).props.children).toEqual('When will I be invited to configure my Model 3, and when can I take delivery?');
  expect(wrapper.find(StyledFaqLink).get(2).props.children).toEqual('Which Model 3 features are currently available?');
});

it('renders the first faq by default', () => {
  const wrapper = shallow(<Faqs {...props}/>);
  expect(wrapper.find('h2').text()).toEqual('How can I check my estimated delivery window?');
  expect(wrapper.find('p').render().text()).toEqual('Model 3 reservation holders can check their latest delivery timing estimate in their Tesla Account.');
});

it('renders the second faq when it\'s clicked', () => {
  let wrapper = shallow(<Faqs {...props}/>);
  
  wrapper.find(StyledFaqLink).get(1).props.onClick();
  wrapper.update();
  expect(wrapper.find('h2').text()).toEqual('When will I be invited to configure my Model 3, and when can I take delivery?');
  expect(wrapper.find('p').render().text()).toEqual('Model 3 reservation holders are receiving invitations to order and design Model 3 based on the time and date that they placed their reservation. Current Tesla owners have priority as a thank you for their support.Deliveries will start in the United States first, with international deliveries starting in left-hand drive markets in late 2018, followed by right-hand drive markets in 2019.');
});
