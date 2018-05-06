import {RouterState} from 'react-router-redux';

import {MediaType} from 'components/Styled/utils';
import {LoadingStates} from 'domains/loadingStates';
import {ITodo} from 'domains/todos/todosTypes';
import {IWindowDimensions} from 'domains/window/windowTypes';

export interface ITodosState {
    loadingState: LoadingStates,
    todos: ITodo[],
    selectedTodoId: string
}

export interface IWindowState {
    windowDimensions: IWindowDimensions,
    media: MediaType
}

export interface IAppState {
    routing: RouterState,
    todosState: ITodosState,
    windowState: IWindowState
}
