import {getType} from 'typesafe-actions';

import {LoadingStates} from 'domains/loadingStates';
import {initAction} from 'domains/rootReducer';
import {ITodo, TodoStatus} from 'domains/todos/todosTypes';

import todoActions from './todosActions';
import {loadingState, selectedTodoId, todos} from './todosReducer';

const todosArray: ITodo[] = [{
    goal: 'Goal',
    id: 'some-id',
    status: TodoStatus.PENDING,
    steps: [],
    title: 'Title'
}];

describe('todos', () => {

    it('has default state', () => {
        const newState = todos(undefined, initAction());
        expect(newState).toEqual([]);
    });

    it('updates the state on LOAD_TODOS_SUCCESS', () => {
        const newState = todos([], todoActions.loadTodosSuccess(todosArray));
        expect(newState).toBe(todosArray);
    });

    it('updates the state on UPDATE_STATUS_SUCCESS', () => {
        const newState = todos([], todoActions.updateTodoStatusSuccess(todosArray));
        expect(newState).toBe(todosArray);
    });

    it('leaves the state unchanged for any other action', () => {
        const newState = todos(todosArray, initAction());
        expect(newState).toBe(todosArray);
    });

});

describe('loadingState', () => {

    it('has default state', () => {
        const newState = loadingState(undefined, initAction());
        expect(newState).toEqual(LoadingStates.NOT_STARTED);
    });

    const pendingActions = [
        todoActions.loadTodosPending,
        todoActions.updateTodoStatusPending
    ];

    pendingActions.forEach((action) => {
        it(`returns LOADING for ${getType(action)}`, () => {
            const newState = loadingState(
                LoadingStates.NOT_STARTED,
                action()
            );
            expect(newState).toEqual(LoadingStates.LOADING);
        });
    });

    const completeSuccessActions = [
        todoActions.loadTodosSuccess,
        todoActions.updateTodoStatusSuccess,
    ];

    const completeErrorActions = [
        todoActions.loadTodosError,
        todoActions.updateTodoStatusError,
    ];

    completeSuccessActions.forEach((action) => {
        it(`returns COMPLETE for ${getType(action)}`, () => {
            const newState = loadingState(LoadingStates.NOT_STARTED, action(todosArray));
            expect(newState).toEqual(LoadingStates.COMPLETE);
        });
    });

    completeErrorActions.forEach((action) => {
        it(`returns COMPLETE for ${getType(action)}`, () => {
            const newState = loadingState(LoadingStates.NOT_STARTED, action());
            expect(newState).toEqual(LoadingStates.COMPLETE);
        });
    });

    it('leaves the state unchanged for any other action', () => {
        const newState = loadingState(LoadingStates.NOT_STARTED, initAction());
        expect(newState).toBe(LoadingStates.NOT_STARTED);
    });

});

describe('selectedTodoId', () => {

    it('has default state', () => {
        const newState = selectedTodoId(undefined, initAction());
        expect(newState).toEqual('');
    });

    it('selects a todo item if SELECT_TODO is executed', () => {
        const newState = selectedTodoId('', todoActions.selectTodo('todo-1'));
        expect(newState).toEqual('todo-1');
    });

    it('resets a todo item if this todo item is already selected and SELECT_TODO is executed', () => {
        const newState = selectedTodoId('todo-1', todoActions.selectTodo('todo-1'));
        expect(newState).toEqual('');
    });

    it('leaves the state unchanged for any other action', () => {
        const newState = selectedTodoId('todo-4', initAction());
        expect(newState).toBe('todo-4');
    });

});