import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import * as apiService from './services/apiService';

apiService.getProductDetails = jest.fn((()=>Promise.resolve({})));
it('renders without crashing', () => {
  let wrapper = shallow(<App/>);
  expect(apiService.getProductDetails).toHaveBeenCalled();
});
