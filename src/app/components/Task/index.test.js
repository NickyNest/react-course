/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Task from './index';

configure({adapter: new Adapter()});

describe('Task', () => {
    it('Task (completed=true) match expected snapshot', () => {
        expect(shallow(<Task
            task={{id: '1', title: 'temp', completed: true, createdDate: new Date(1900, 1, 1)}}
            onCheckChange={() => {}}
            onRemoveTask={() => {}} />)).toMatchSnapshot();
    });
});

describe('Task', () => {
    it('Task (completed=false) match expected snapshot', () => {
        expect(shallow(<Task
            task={{id: '1', title: 'temp', completed: false, createdDate: new Date(1900, 1, 1)}}
            onCheckChange={() => {}}
            onRemoveTask={() => {}} />)).toMatchSnapshot();
    });
});

