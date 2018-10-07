import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import {ActionType, createStandardAction} from 'typesafe-actions';

import {IAppState} from './types';

import themeReducer from 'domains/theme/themeReducer';
import todosReducer from 'domains/todos/todosReducer';
import windowReducer from 'domains/window/windowReducer';

import {ThemeAction} from 'domains/theme/themeActions';
import {TodosAction} from 'domains/todos/todosActions';
import {WindowAction} from 'domains/window/windowActions';

export const initAction = createStandardAction('@@INIT')();
export type AppAction = ThemeAction | TodosAction | WindowAction | ActionType<typeof initAction>;

const rootReducer = combineReducers<IAppState>({
    routing: routerReducer,
    themeState: themeReducer,
    todosState: todosReducer,
    windowState: windowReducer
});

export default rootReducer;