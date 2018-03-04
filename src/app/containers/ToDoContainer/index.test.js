/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToDoContainer from './index';

configure({adapter: new Adapter()});

describe('ToDoContainer', () => {
    it('ToDoContainer match expected snapshot', () => {
        expect(shallow(<ToDoContainer />)).toMatchSnapshot();
    });
});