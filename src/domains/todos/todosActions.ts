import {ActionCreator, AnyAction} from 'redux';

import {ITodo} from 'domains/types';

export enum TodosActions {
    LOAD_TODOS = 'LOAD_TODOS',
    LOAD_TODOS_PENDING = 'LOAD_TODOS_PENDING',
    LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS',
    LOAD_TODOS_ERROR = 'LOAD_TODOS_ERROR',
}

export interface ILoadTodosSuccessAction extends AnyAction {
    payload: ITodo[];
}

export const loadTodos: ActionCreator<AnyAction> = () => {
    return {type: TodosActions.LOAD_TODOS};
};

export const loadTodosPending: ActionCreator<AnyAction> = () => {
    return {type: TodosActions.LOAD_TODOS_PENDING};
};

export const loadTodosSuccess: ActionCreator<ILoadTodosSuccessAction> = (todos: ITodo[]) => {
    return {
        payload: todos,
        type: TodosActions.LOAD_TODOS_SUCCESS
    };
};

export const loadTodosError: ActionCreator<AnyAction> = () => {
    return {type: TodosActions.LOAD_TODOS_ERROR};
};
