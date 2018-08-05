import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import root from 'lodash._root';
import MainPage from 'containers/MainPage';
import {createStore} from 'redux';
import todoApp from './reducers';
import {addTask, updateTask, setShowMode, SHOW_MODES, setSortMode, SORT_MODES, removeTask} from './actions';
import './index.css';

const store = createStore(todoApp);
console.log(store.getState());
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addTask({id: 1, title: 'title1', completed: false, createdDate: Date.now()}));
store.dispatch(addTask({id: 2, title: 'title2', completed: true, createdDate: Date.now()}));
store.dispatch(addTask({id: 3, title: 'title3', completed: false, createdDate: Date.now()}));

store.dispatch(updateTask(2, false));
store.dispatch(setShowMode(SHOW_MODES.SHOW_COMPLETED));
store.dispatch(setSortMode(SORT_MODES.CREATED_DATE_UP));
store.dispatch(removeTask(2));

unsubscribe();

render(
    <MainPage />,
    root.document.getElementById('root')
);
