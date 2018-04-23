import {LoadingStates} from 'domains/loadingStates';
import {ITodo, TodoStatus} from 'domains/types';

import {TodosActions} from './todosActions';
import {loadingState, selectedTodoId, todos} from './todosReducer';

describe('todos', () => {

    it('has default state', () => {
        const newState = todos(undefined, {type: 'some-action'});
        expect(newState).toEqual([]);
    });

    const todosArray: ITodo[] = [{
        goal: 'Goal',
        id: 'some-id',
        status: TodoStatus.NOT_STARTED,
        steps: [],
        title: 'Title'
    }];

    it('updates the state on LOAD_TODOS_SUCCESS', () => {
        const action = {payload: todosArray, type: TodosActions.LOAD_TODOS_SUCCESS};
        const newState = todos([], action);
        expect(newState).toBe(todosArray);
    });

    it('leaves the state unchanged for any other action', () => {
        const action = {payload: 'some string', type: 'some-action'};
        const newState = todos(todosArray, action);
        expect(newState).toBe(todosArray);
    });

});

describe('loadingState', () => {

    it('has default state', () => {
        const newState = loadingState(undefined, {type: 'some-action'});
        expect(newState).toEqual(LoadingStates.NOT_STARTED);
    });

    it('returns LOADING on TodosActions.LOAD_TODOS_PENDING', () => {
        const newState = loadingState(
            LoadingStates.NOT_STARTED,
            {type: TodosActions.LOAD_TODOS_PENDING}
        );
        expect(newState).toEqual(LoadingStates.LOADING);
    });

    it('returns COMPLETE on TodosActions.LOAD_TODOS_SUCCESS', () => {
        const newState = loadingState(
            LoadingStates.NOT_STARTED,
            {type: TodosActions.LOAD_TODOS_SUCCESS}
        );
        expect(newState).toEqual(LoadingStates.COMPLETE);
    });

    it('returns COMPLETE on TodosActions.LOAD_TODOS_ERROR', () => {
        const newState = loadingState(
            LoadingStates.NOT_STARTED,
            {type: TodosActions.LOAD_TODOS_ERROR}
        );
        expect(newState).toEqual(LoadingStates.COMPLETE);
    });

    it('leaves the state unchanged for any other action', () => {
        const action = {payload: 'some string', type: 'some-action'};
        const newState = loadingState(LoadingStates.NOT_STARTED, action);
        expect(newState).toBe(LoadingStates.NOT_STARTED);
    });

});

describe('selectedTodoId', () => {

    it('has default state', () => {
        const newState = selectedTodoId(undefined, {type: 'some-action'});
        expect(newState).toEqual('');
    });

    it('selects a todo item if SELECT_TODO is executed', () => {
        const newState = selectedTodoId('', {payload: 'todo-1', type: TodosActions.SELECT_TODO});
        expect(newState).toEqual('todo-1');
    });

    it('resets a todo item if this todo item is already selected and SELECT_TODO is executed', () => {
        const newState = selectedTodoId('todo-1', {payload: 'todo-1', type: TodosActions.SELECT_TODO});
        expect(newState).toEqual('');
    });

    it('leaves the state unchanged for any other action', () => {
        const action = {payload: 'some string', type: 'some-action'};
        const newState = selectedTodoId('todo-4', action);
        expect(newState).toBe('todo-4');
    });

});