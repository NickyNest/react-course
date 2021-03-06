import * as taskApi from 'utils/taskStore';
import {toDate} from 'utils/helpers';

export const GET_TASKS = 'GET_TASKS';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
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
    SORT_CREATED_DATE_NONE: 'SORT_CREATED_DATE_NONE',
    SORT_CREATED_DATE_UP: 'SORT_CREATED_DATE_UP',
    SORT_CREATED_DATE_DOWN: 'SORT_CREATED_DATE_DOWN'
};

const getTasks = () => ({type: GET_TASKS});
export const getTasksSuccess = tasks => ({type: GET_TASKS_SUCCESS, payload: {tasks} });

export const addTask = task => ({type: ADD_TASK, payload: {task} });

const updateTask = () => ({type: UPDATE_TASK});
export const updateTaskSuccess = (id, isCompleted) => ({type: UPDATE_TASK_SUCCESS, payload: {id, isCompleted} });

export const removeTask = id => ({type: REMOVE_TASK, payload: {id} });

export const setShowMode = showMode => ({type: SET_SHOW_MODE, payload: {showMode} });
export const setSortMode = sortMode => ({type: SET_SORT_MODE, payload: {sortMode} });
export const setFetchMode = fetchMode => ({type: SET_FETCH_MODE, payload: {fetchMode} });

const sleep = () => {
    const e = new Date().getTime() + 2000;
    while (new Date().getTime() <= e) { console.log(e); }
};
export const fetchTasks = () => dispatch => {
    dispatch(getTasks());
    dispatch(setFetchMode(true));
    return taskApi.get().then(response => response.json())
        .then(taskData => taskData.map(task => ({...task, createdDate: toDate(task.createdDate)})))
        .then(tasks => {
            sleep();
            dispatch(setFetchMode(false));
            dispatch(getTasksSuccess(tasks));
        });
};

export const toggleTask = (id, isCompleted) => dispatch => {
    dispatch(updateTask());
    return taskApi.update(id, {completed: isCompleted})
        .then(response => {
            if (response.ok) {
                dispatch(updateTaskSuccess(id, isCompleted));
            } else {
                throw new Error('Network response was not ok.');
            }
        });
};