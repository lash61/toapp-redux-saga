import {RouterState} from 'react-router-redux';

import {LoadingStates} from 'domains/loadingStates';
import {ITodo} from 'domains/todos/todosTypes';
import {IWindowDimensions} from './window/windowTypes';

export interface ITodosState {
    loadingState: LoadingStates,
    todos: ITodo[],
    selectedTodoId: string
}

export interface IWindowState {
    windowDimensions: IWindowDimensions
}

export interface IAppState {
    routing: RouterState,
    todosState: ITodosState,
    windowState: IWindowState
}
