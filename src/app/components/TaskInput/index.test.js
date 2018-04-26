/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow} from 'enzyme';
import TaskInput from './index';

test('TaskInput match expected snapshot', () => {
    expect(shallow(<TaskInput onAddTask={() => {}} />)).toMatchSnapshot();
});