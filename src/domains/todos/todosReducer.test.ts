import {LoadingStates} from 'domains/loadingStates';
import {ITodo, TodoStatus} from 'domains/types';

import {TodosActions} from './todosActions';
import {loadingState, todos} from './todosReducer';

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