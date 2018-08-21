import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import root from 'lodash._root';
import MainPage from 'containers/MainPage';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {fetchTasks} from './actions';
import './index.css';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunkMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //eslint-disable-line
    )
);

store.dispatch(fetchTasks());

render(
    <Provider store={store}>
        <MainPage />
    </Provider>,
    root.document.getElementById('root')
);
