/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow} from 'enzyme';
import Task from './index';

test('Task (completed=true) match expected snapshot', () => {
    expect(shallow(<Task
        task={{id: '1', title: 'temp', completed: true, createdDate: new Date(1900, 1, 1)}}
        onCheckChange={() => {}}
        onRemoveTask={() => {}} />)).toMatchSnapshot();
});

test('Task (completed=false) match expected snapshot', () => {
    expect(shallow(<Task
        task={{id: '1', title: 'temp', completed: false, createdDate: new Date(1900, 1, 1)}}
        onCheckChange={() => {}}
        onRemoveTask={() => {}} />)).toMatchSnapshot();
});

