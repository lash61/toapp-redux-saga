import {RouterState} from 'react-router-redux';

import {LoadingStates} from 'domains/loadingStates';
import {ITodo} from 'domains/todos/todosTypes';

export interface ITodosState {
    loadingState: LoadingStates,
    todos: ITodo[],
    selectedTodoId: string
}

export interface IAppState {
    routing: RouterState,
    todosState: ITodosState
}
