/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow} from 'enzyme';
import Logo from './index';

test('Logo match expected snapshot', () => {
    expect(shallow(<Logo className='logo-class-name' alt='logo-alt-name' />)).toMatchSnapshot();
});
