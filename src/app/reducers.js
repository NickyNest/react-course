import {combineReducers} from 'redux';
import {ADD_TASK, UPDATE_TASK, REMOVE_TASK, SHOW_MODES, SORT_MODES, SET_SHOW_MODE, SET_SORT_MODE} from './actions';

// const initialState = {
//     tasks: [],
//     showMode: SHOW_MODES.SHOW_ALL,
//     sortMode: SORT_MODES.CREATED_DATE_NONE
// };

const tasks = (state = [], action) => {
    let taskIndex;

    switch (action.type) {
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

const showMode = (state = SHOW_MODES.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_SHOW_MODE:
            return action.payload.showMode;
        default:
            return state;
    }
};

const sortMode = (state = SORT_MODES.CREATED_DATE_NONE, action) => {
    switch (action.type) {
        case SET_SORT_MODE:
            return action.payload.sortMode;
        default:
            return state;
    }
};

// const taskApp2 = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TASK:
//             return {...state, tasks: tasks(state.tasks, action)};
//         case UPDATE_TASK:
//             return {...state, tasks: tasks(state.tasks, action)};
//         case REMOVE_TASK:
//             return {...state, tasks: tasks(state.tasks, action)};
//         case SET_SHOW_MODE:
//             return {...state, showMode: showMode(state.showMode, action)};
//         case SET_SORT_MODE:
//             return {...state, sortMode: sortMode(state.sortMode, action)};
//         default:
//             return state;
//     }
// };

// const taskApp = (state = {}, action) => ({
//     tasks: tasks(state.tasks, action),
//     showMode: showMode(state.showMode, action),
//     sortMode: sortMode(state.sortMode, action)
// });
const todoApp = combineReducers({
    tasks,
    showMode,
    sortMode
});

export default todoApp;