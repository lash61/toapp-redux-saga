import {AnyAction, Dispatch} from 'redux';

import {IAppState, ITodo} from 'domains/types';
import apiFactory from 'service/api';

export enum TodosActions {
    LOAD_TODOS = 'LOAD_TODOS',
    LOAD_TODOS_PENDING = 'LOAD_TODOS_PENDING',
    LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS',
    LOAD_TODOS_ERROR = 'LOAD_TODOS_ERROR',
}

const api = apiFactory();

export const loadTodos = () => (dispatch: Dispatch<IAppState>): Promise<AnyAction> => {
    dispatch({type: TodosActions.LOAD_TODOS_PENDING});

    return api.loadTodoList()
        .then((todos: ITodo[]) => {
            return dispatch({
                payload: todos,
                type: TodosActions.LOAD_TODOS_SUCCESS
            });
        })
        .catch((err) => {
            console.log('store err', dispatch);
            return dispatch({
                type: TodosActions.LOAD_TODOS_ERROR
            });
        });
};


