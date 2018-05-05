import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import {IAppState} from './types';

import todosReducer from 'domains/todos/todosReducer';
import windowReducer from 'domains/window/windowReducer';

const rootReducer = combineReducers<IAppState>({
    routing: routerReducer,
    todosState: todosReducer,
    windowState: windowReducer
});

export default rootReducer;