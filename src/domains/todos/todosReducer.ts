import * as R from 'ramda';
import {combineReducers} from 'redux';
import {getType} from 'typesafe-actions';

import {LoadingStates} from 'domains/loadingStates';
import {AppAction} from 'domains/rootReducer';
import {ITodo} from 'domains/todos/todosTypes';

import todoActions from './todosActions';

export const todos = (state: ITodo[] = [], action: AppAction) => {
    if (action.type === getType(todoActions.loadTodosSuccess) ||
        action.type === getType(todoActions.updateTodoStatusSuccess)) {
        return action.payload;
    }
    return state;
};

export const loadingState = (state = LoadingStates.NOT_STARTED, action: AppAction) => {
    const pendingArray = [
        getType(todoActions.loadTodosPending),
        getType(todoActions.updateTodoStatusPending),
    ];
    if (R.contains(action.type, pendingArray)) {
        return LoadingStates.LOADING;
    }

    const completeArray = [
        getType(todoActions.loadTodosSuccess),
        getType(todoActions.loadTodosError),
        getType(todoActions.updateTodoStatusSuccess),
        getType(todoActions.updateTodoStatusError)
    ];
    if (R.contains(action.type, completeArray)) {
        return LoadingStates.COMPLETE;
    }

    return state;
};

export const selectedTodoId = (state = '', action: AppAction) => {
    if (action.type === getType(todoActions.selectTodo)) {
        return state === action.payload ? '' : action.payload;
    }
    return state;
};

export default combineReducers({
    loadingState,
    selectedTodoId,
    todos,
});

