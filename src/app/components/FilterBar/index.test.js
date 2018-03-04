/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterBar from './index';

configure({adapter: new Adapter()});

describe('FilterBar', () => {
    it('FilterBar (currentMode=SHOW_PENDING) match expected snapshot', () => {
        expect(shallow(<FilterBar
            changeShowMode={() => {}}
            removeCompleted={() => {}}
            changeSortMode={() => {}}
            currentMode='SHOW_PENDING' />)).toMatchSnapshot();
    });
});

describe('FilterBar', () => {
    it('FilterBar (currentMode=SHOW_COMPLETED) match expected snapshot', () => {
        expect(shallow(<FilterBar
            changeShowMode={() => {}}
            removeCompleted={() => {}}
            changeSortMode={() => {}}
            currentMode='SHOW_COMPLETED' />)).toMatchSnapshot();
    });
});
