/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow, mount} from 'enzyme';
import TaskInput from './index';

test('TaskInput match expected snapshot', () => {
    expect(shallow(<TaskInput onAddTask={() => {}} />)).toMatchSnapshot();
});

test('TaskInput on change should update the state', done => {
    const newValue = 'newValue';
    const wrapper = mount(<TaskInput onAddTask={() => {}} />);
    wrapper.find('input').simulate('change', {target: {value: newValue} });

    setTimeout(() => {
        expect(wrapper.state().title).toEqual(newValue);
        done();
    }, 100);
});

test('TaskInput on press Z key should not update the state and call onAddTask', () => {
    const onAddTaskMock = jest.fn();
    const wrapper = mount(<TaskInput onAddTask={onAddTaskMock} />);
    wrapper.find('input').simulate('keyPress', {key: 'z'});

    expect(wrapper.state().title).toEqual('');
    expect(onAddTaskMock).not.toHaveBeenCalled();
});

test('TaskInput on press Enter with empty value should not update the state and call onAddTask', () => {
    const onAddTaskMock = jest.fn();
    const wrapper = mount(<TaskInput onAddTask={onAddTaskMock} />);
    wrapper.find('input').simulate('keyPress', {key: 'Enter'});

    expect(wrapper.state().title).toEqual('');
    expect(onAddTaskMock).not.toHaveBeenCalled();
});

test('TaskInput on press Enter with not empty value should clean up the state and call onAddTask', done => {
    const newValue = 'newValue';
    const onAddTaskMock = jest.fn();
    const wrapper = mount(<TaskInput onAddTask={onAddTaskMock} />);
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: newValue} });
    input.simulate('keyPress', {key: 'Enter'});

    setTimeout(() => {
        expect(wrapper.state().title).toEqual('');
        expect(onAddTaskMock).lastCalledWith(newValue);
        done();
    }, 100);
});