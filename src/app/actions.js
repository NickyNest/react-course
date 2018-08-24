import * as taskApi from 'utils/taskStore';
import {toDate} from 'utils/helpers';

export const GET_TASKS = 'GET_TASKS';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const SET_SHOW_MODE = 'SET_SHOW_MODE';
export const SET_SORT_MODE = 'SET_SORT_MODE';
export const SET_FETCH_MODE = 'SET_FETCH_MODE';

export const SHOW_MODES = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_PENDING: 'SHOW_PENDING'
};

export const SORT_MODES = {
    CREATED_DATE_NONE: 'CREATED_DATE_NONE',
    CREATED_DATE_UP: 'CREATED_DATE_UP',
    CREATED_DATE_DOWN: 'CREATED_DATE_DOWN'
};

export const FETCH_MODES = {
    NO_FETCHING: 'NO_FETCHING',
    IS_FETCHING: 'IS_FETCHING'
};

export const getTasks = () => ({type: GET_TASKS});
export const getTasksSuccess = tasks => ({type: GET_TASKS_SUCCESS, payload: {tasks} });

export const addTask = task => ({type: ADD_TASK, payload: {task} });
export const updateTask = (id, isCompleted) => ({type: UPDATE_TASK, payload: {id, isCompleted} });
export const removeTask = id => ({type: REMOVE_TASK, payload: {id} });

export const setShowMode = showMode => ({type: SET_SHOW_MODE, payload: {showMode} });
export const setSortMode = sortMode => ({type: SET_SORT_MODE, payload: {sortMode} });
export const setFetchMode = fetchMode => ({type: SET_FETCH_MODE, payload: {fetchMode} });

export const fetchTasks = () => dispatch => {
    dispatch(setFetchMode(FETCH_MODES.IS_FETCHING));
    dispatch(getTasks());
    return taskApi.get().then(response => response.json())
        .then(taskData => taskData.map(task => ({...task, createdDate: toDate(task.createdDate)})))
        .then(tasks => {
            dispatch(setFetchMode(FETCH_MODES.NO_FETCHING));
            dispatch(getTasksSuccess(tasks));
        });
};
