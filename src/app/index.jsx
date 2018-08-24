import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import root from 'lodash._root';
import RootContainer from 'containers/RootContainer';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
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

render(
    <Provider store={store}>
        <RootContainer />
    </Provider>,
    root.document.getElementById('root')
);
