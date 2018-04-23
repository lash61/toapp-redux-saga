import {RouterState} from 'react-router-redux';
import {LoadingStates} from './loadingStates';

export interface IAppState {
    routing: RouterState,
    todosState: ITodosState
}

export interface ITodosState {
    loadingState: LoadingStates,
    todos: ITodo[],
    selectedTodoId: string
}

export enum TodoStatus {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETE = 'COMPLETE',
}

export interface ITodoStep {
    id: string,
    title: string,
    details: string
}

export interface ITodo {
    id: string,
    title: string,
    goal: string,
    steps: ITodoStep[],
    status: TodoStatus
}
