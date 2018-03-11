/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterBar from './index';

configure({adapter: new Adapter()});

describe('FilterBar', () => {
    it('with currentMode=SHOW_PENDING should match expected snapshot', () => {
        expect(shallow(<FilterBar
            changeShowMode={() => {}}
            removeCompleted={() => {}}
            changeSortMode={() => {}}
            currentMode='SHOW_PENDING' />)).toMatchSnapshot();
    });

    it('with currentMode=SHOW_COMPLETED should match expected snapshot', () => {
        expect(shallow(<FilterBar
            changeShowMode={() => {}}
            removeCompleted={() => {}}
            changeSortMode={() => {}}
            currentMode='SHOW_COMPLETED' />)).toMatchSnapshot();
    });

    it('with click on button ShowAll should call changeShowMode with parameter SHOW_ALL', () => {
        const changeShowModeMock = jest.fn();
        const wrapper = shallow(<FilterBar
            changeShowMode={changeShowModeMock}
            removeCompleted={() => {}}
            changeSortMode={() => {}}
            currentMode='SHOW_COMPLETED' />);
        wrapper.find('#btnShowAll').simulate('click');

        expect(changeShowModeMock.mock.calls.length).toEqual(1);
        expect(changeShowModeMock.mock.calls[0][0]).toEqual('SHOW_ALL');
    });

    it('with click on button ShowCompleted should call changeShowMode with parameter SHOW_COMPLETED', () => {
        const changeShowModeMock = jest.fn();
        const wrapper = shallow(<FilterBar
            changeShowMode={changeShowModeMock}
            removeCompleted={() => {}}
            changeSortMode={() => {}}
            currentMode='SHOW_COMPLETED' />);
        wrapper.find('#btnShowCompleted').simulate('click');

        expect(changeShowModeMock.mock.calls.length).toEqual(1);
        expect(changeShowModeMock.mock.calls[0][0]).toEqual('SHOW_COMPLETED');
    });

    it('with click on button ShowPending should call changeShowMode with parameter SHOW_PENDING', () => {
        const changeShowModeMock = jest.fn();
        const wrapper = shallow(<FilterBar
            changeShowMode={changeShowModeMock}
            removeCompleted={() => {}}
            changeSortMode={() => {}}
            currentMode='SHOW_COMPLETED' />);
        wrapper.find('#btnShowPending').simulate('click');

        expect(changeShowModeMock.mock.calls.length).toEqual(1);
        expect(changeShowModeMock.mock.calls[0][0]).toEqual('SHOW_PENDING');
    });

    it('with click on button RemoveCompleted should call removeCompleted once', () => {
        const removeCompletedMock = jest.fn();
        const wrapper = shallow(<FilterBar
            changeShowMode={() => {}}
            removeCompleted={removeCompletedMock}
            changeSortMode={() => {}}
            currentMode='SHOW_COMPLETED' />);
        wrapper.find('[disabled=false]').simulate('click');

        expect(removeCompletedMock.mock.calls.length).toEqual(1);
    });

    it('with click on button SortDateUp should call changeSortMode with parameter SORT_CREATED_DATE_UP', () => {
        const changeSortModeMock = jest.fn();
        const wrapper = shallow(<FilterBar
            changeShowMode={() => {}}
            removeCompleted={() => {}}
            changeSortMode={changeSortModeMock}
            currentMode='SHOW_COMPLETED' />);
        wrapper.find('#btnSortDateUp').simulate('click');

        expect(changeSortModeMock.mock.calls.length).toEqual(1);
        expect(changeSortModeMock.mock.calls[0][0]).toEqual('SORT_CREATED_DATE_UP');
    });

    it('with click on button SortDateDown should call changeSortMode with parameter SORT_CREATED_DATE_DOWN', () => {
        const changeSortModeMock = jest.fn();
        const wrapper = shallow(<FilterBar
            changeShowMode={() => {}}
            removeCompleted={() => {}}
            changeSortMode={changeSortModeMock}
            currentMode='SHOW_COMPLETED' />);
        wrapper.find('#btnSortDateDown').simulate('click');

        expect(changeSortModeMock.mock.calls.length).toEqual(1);
        expect(changeSortModeMock.mock.calls[0][0]).toEqual('SORT_CREATED_DATE_DOWN');
    });
});
