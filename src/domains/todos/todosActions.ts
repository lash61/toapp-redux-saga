import {ActionCreator, AnyAction} from 'redux';

import {ITodo} from 'domains/todos/todosTypes';

export enum TodosActions {
    LOAD_TODOS = 'LOAD_TODOS',
    LOAD_TODOS_PENDING = 'LOAD_TODOS_PENDING',
    LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS',
    LOAD_TODOS_ERROR = 'LOAD_TODOS_ERROR',

    SELECT_TODO = 'SELECT_TODO',

    UPDATE_STATUS = 'UPDATE_STATUS',
    UPDATE_STATUS_PENDING = 'UPDATE_STATUS_PENDING',
    UPDATE_STATUS_SUCCESS = 'UPDATE_STATUS_SUCCESS',
    UPDATE_STATUS_ERROR = 'UPDATE_STATUS_ERROR',
}

export interface ILoadTodosSuccessAction extends AnyAction {
    payload: ITodo[];
}

const loadTodos: ActionCreator<AnyAction> = () => {
    return {type: TodosActions.LOAD_TODOS};
};

const loadTodosPending: ActionCreator<AnyAction> = () => {
    return {type: TodosActions.LOAD_TODOS_PENDING};
};

const loadTodosSuccess: ActionCreator<ILoadTodosSuccessAction> = (todos: ITodo[]) => {
    return {
        payload: todos,
        type: TodosActions.LOAD_TODOS_SUCCESS
    };
};

const loadTodosError: ActionCreator<AnyAction> = () => {
    return {type: TodosActions.LOAD_TODOS_ERROR};
};

const selectTodo: ActionCreator<AnyAction> = (todoId: string) => {
    return {
        payload: todoId,
        type: TodosActions.SELECT_TODO
    };
};

const updateTodoStatus: ActionCreator<AnyAction> = (todoId: string) => {
    return {
        payload: todoId,
        type: TodosActions.UPDATE_STATUS
    };
};

const updateTodoStatusPending: ActionCreator<AnyAction> = () => {
    return {type: TodosActions.UPDATE_STATUS_PENDING};
};

const updateTodoStatusSuccess: ActionCreator<ILoadTodosSuccessAction> = (todos: ITodo[]) => {
    return {
        payload: todos,
        type: TodosActions.UPDATE_STATUS_SUCCESS
    };
};

const updateTodoStatusError: ActionCreator<AnyAction> = () => {
    return {type: TodosActions.UPDATE_STATUS_ERROR};
};

export default {
    loadTodos,
    loadTodosError,
    loadTodosPending,
    loadTodosSuccess,
    selectTodo,
    updateTodoStatus,
    updateTodoStatusError,
    updateTodoStatusPending,
    updateTodoStatusSuccess
}