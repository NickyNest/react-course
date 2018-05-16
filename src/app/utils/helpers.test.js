/* eslint-disable react/jsx-filename-extension */

import * as actions from 'utils/actions';
import * as helpers from 'utils/helpers';

test('toDate retuns normal date', () => {
    expect(helpers.toDate('0/1/2018').getTime()).toEqual(new Date(2018, 0, 1).getTime());
});

test('buildTask should return new Task with special date format', () => {
    expect(helpers.buildTask('title', new Date(2018, 5, 6))).toEqual({
        title: 'title',
        completed: false,
        createdDate: '5/6/2018'
    });
});

const tasks = [
    {title: 'titleB', completed: true, createdDate: new Date(2018, 5, 7)},
    {title: 'titleA', completed: false, createdDate: new Date(2018, 5, 7)},
    {title: 'titleC', completed: true, createdDate: new Date(2018, 5, 9)}
];

test('handleShowMode with showMode=SHOW_COMPLETED should return tasks with completed=true', () => {
    expect(helpers.handleShowMode(tasks, actions.SHOW_COMPLETED)).toEqual([tasks[0], tasks[2]]);
});

test('handleShowMode with showMode=SHOW_PENDING should return tasks with completed=false', () => {
    expect(helpers.handleShowMode(tasks, actions.SHOW_PENDING)).toEqual([tasks[1]]);
});

test('handleShowMode with showMode=SHOW_ALL should return all tasks without filter', () => {
    expect(helpers.handleShowMode(tasks, actions.SHOW_ALL)).toEqual(tasks);
});

test('handleSortMode with sortMode=SORT_CREATED_DATE_UP should return tasks sorted by date up', () => {
    const expected = [
        {title: 'titleA', completed: false, createdDate: new Date(2018, 5, 7)},
        {title: 'titleB', completed: true, createdDate: new Date(2018, 5, 7)},
        {title: 'titleC', completed: true, createdDate: new Date(2018, 5, 9)}
    ];
    expect(helpers.handleSortMode(tasks, actions.SORT_CREATED_DATE_UP)).toEqual(expected);
});

test('handleSortMode with sortMode=SORT_CREATED_DATE_DOWN should return tasks sorted by date down', () => {
    const expected = [
        {title: 'titleC', completed: true, createdDate: new Date(2018, 5, 9)},
        {title: 'titleB', completed: true, createdDate: new Date(2018, 5, 7)},
        {title: 'titleA', completed: false, createdDate: new Date(2018, 5, 7)}
    ];
    expect(helpers.handleSortMode(tasks, actions.SORT_CREATED_DATE_DOWN)).toEqual(expected);
});

test('handleSortMode with sortMode=SORT_CREATED_DATE_NONE should return original tasks', () => {
    expect(helpers.handleSortMode(tasks, actions.SORT_CREATED_DATE_NONE)).toEqual(tasks);
});

