import * as R from 'ramda';
import {AnyAction, combineReducers} from 'redux';

import {LoadingStates} from 'domains/loadingStates';
import {ITodo} from 'domains/types';
import {TodosActions} from './todosActions';

export const todos = (state: ITodo[] = [], action: AnyAction) => {
    if (action.type === TodosActions.LOAD_TODOS_SUCCESS) {
        return action.payload;
    }
    return state;
};

export const loadingState = (state = LoadingStates.NOT_STARTED, action: AnyAction) => {
    if (action.type === TodosActions.LOAD_TODOS_PENDING) {
        return LoadingStates.LOADING;
    }

    const completeArray = [
        TodosActions.LOAD_TODOS_SUCCESS,
        TodosActions.LOAD_TODOS_ERROR,
    ];
    if (R.contains(action.type, completeArray)) {
        return LoadingStates.COMPLETE;
    }

    return state;
};

export default combineReducers({
    loadingState,
    todos
});

