import {combineReducers} from 'redux';
import {GET_TASKS_SUCCESS, ADD_TASK, UPDATE_TASK, REMOVE_TASK,
    SHOW_MODES, SORT_MODES, SET_SHOW_MODE, SET_SORT_MODE, SET_FETCH_MODE} from './actions';

// const initialState = {
//     tasks: [],
//     showMode: SHOW_MODES.SHOW_ALL,
//     sortMode: SORT_MODES.CREATED_DATE_NONE,
//     isFetching: false
// };

const tasksReducer = (state = [], action) => {
    let taskIndex;

    switch (action.type) {
        case GET_TASKS_SUCCESS:
            return action.payload.tasks;
        case ADD_TASK:
            return [...state, action.payload.task];
        case UPDATE_TASK:
            taskIndex = state.findIndex(task => task.id === action.payload.id);
            return [
                ...state.slice(0, taskIndex),
                {...state[taskIndex], completed: action.payload.isCompleted},
                ...state.slice(taskIndex + 1, state.length)
            ];
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        default:
            return state;
    }
};

const showModeReducer = (state = SHOW_MODES.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_SHOW_MODE:
            return action.payload.showMode;
        default:
            return state;
    }
};

const sortModeReducer = (state = SORT_MODES.SORT_CREATED_DATE_NONE, action) => {
    switch (action.type) {
        case SET_SORT_MODE:
            return action.payload.sortMode;
        default:
            return state;
    }
};

const fetchModeReducer = (state = false, action) => {
    switch (action.type) {
        case SET_FETCH_MODE:
            return action.payload.fetchMode;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    tasks: tasksReducer,
    showMode: showModeReducer,
    sortMode: sortModeReducer,
    isFetching: fetchModeReducer
});

export default rootReducer;