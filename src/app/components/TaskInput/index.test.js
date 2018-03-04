/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskInput from './index';

configure({adapter: new Adapter()});

describe('TaskInput', () => {
    it('TaskInput match expected snapshot', () => {
        expect(shallow(<TaskInput onAddTask={() => {}} />)).toMatchSnapshot();
    });
});