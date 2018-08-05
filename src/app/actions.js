export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const SET_SHOW_MODE = 'SET_SHOW_MODE';
export const SET_SORT_MODE = 'SET_SORT_MODE';

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

export const getTasks = () => ({type: GET_TASKS});
export const addTask = task => ({type: ADD_TASK, payload: {task} });
export const updateTask = (id, isCompleted) => ({type: UPDATE_TASK, payload: {id, isCompleted} });
export const removeTask = id => ({type: REMOVE_TASK, payload: {id} });

export const setShowMode = showMode => ({type: SET_SHOW_MODE, payload: {showMode} });
export const setSortMode = sortMode => ({type: SET_SORT_MODE, payload: {sortMode} });