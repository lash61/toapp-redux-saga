import * as R from 'ramda';
import {AnyAction, combineReducers} from 'redux';

import {LoadingStates} from 'domains/loadingStates';
import {ITodo} from 'domains/todos/todosTypes';
import {TodosActions} from './todosActions';

export const todos = (state: ITodo[] = [], action: AnyAction) => {
    if (action.type === TodosActions.LOAD_TODOS_SUCCESS ||
        action.type === TodosActions.UPDATE_STATUS_SUCCESS) {
        return action.payload;
    }
    return state;
};

export const loadingState = (state = LoadingStates.NOT_STARTED, action: AnyAction) => {
    const pendingArray = [
        TodosActions.LOAD_TODOS_PENDING,
        TodosActions.UPDATE_STATUS_PENDING,
    ];
    if (R.contains(action.type, pendingArray)) {
        return LoadingStates.LOADING;
    }

    const completeArray = [
        TodosActions.LOAD_TODOS_SUCCESS,
        TodosActions.LOAD_TODOS_ERROR,
        TodosActions.UPDATE_STATUS_SUCCESS,
        TodosActions.UPDATE_STATUS_ERROR
    ];
    if (R.contains(action.type, completeArray)) {
        return LoadingStates.COMPLETE;
    }

    return state;
};

export const selectedTodoId = (state = '', action: AnyAction) => {
    if (action.type === TodosActions.SELECT_TODO) {
        return state === action.payload ? '' : action.payload;
    }
    return state;
};

export default combineReducers({
    loadingState,
    selectedTodoId,
    todos,
});

