/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './index';

test('MainPage match expected snapshot', () => {
    expect(shallow(<MainPage />)).toMatchSnapshot();
});
