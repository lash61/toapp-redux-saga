import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import {IAppState} from './types';

import todosReducer from 'domains/todos/todosReducer';

const rootReducer = combineReducers<IAppState>({
    routing: routerReducer,
    todosState: todosReducer
});

export default rootReducer;