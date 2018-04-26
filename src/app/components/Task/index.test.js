/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow, mount} from 'enzyme';
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

test('Task with click on button should call onRemoveTask with parameter 1', () => {
    const onRemoveTaskMock = jest.fn();
    const wrapper = shallow(<Task
        task={{id: '1', title: 'temp', completed: false, createdDate: new Date(1900, 1, 1)}}
        onCheckChange={() => {}}
        onRemoveTask={onRemoveTaskMock} />);
    wrapper.find('button').simulate('click');

    expect(onRemoveTaskMock.mock.calls.length).toEqual(1);
    expect(onRemoveTaskMock.mock.calls[0][0]).toEqual('1');
});

test('Task with toggle checkbox should call onCheckChange with parameters 1, true', () => {
    const onCheckChangeMock = jest.fn();
    const wrapper = mount(<Task
        task={{id: '1', title: 'temp', completed: true, createdDate: new Date(1900, 1, 1)}}
        onCheckChange={onCheckChangeMock}
        onRemoveTask={() => {}} />);
    wrapper.find('Checkbox').simulate('change');

    expect(onCheckChangeMock.mock.calls.length).toEqual(1);
    expect(onCheckChangeMock.mock.calls[0][0]).toEqual('1');
    expect(onCheckChangeMock.mock.calls[0][1]).toEqual(false);
});