import {lensPath, view} from 'ramda';

import {IApiService} from 'service/api';

import {ITodo, TodoStatus} from 'domains/types';

import {loadTodosError, loadTodosPending, loadTodosSuccess, TodosActions} from './todosActions';
import {loadTodos} from './todosSaga';

const PUT = view(lensPath(['value', 'PUT', 'action']));
const CALL = view(lensPath(['value', 'CALL', 'fn']));

describe('loadTodos', () => {

    let apiService: IApiService;
    beforeEach(() => {
        apiService = {
            loadTodo: jest.fn(),
            loadTodoList: jest.fn()
        };
    });

    it('runs successful scenario', () => {
        const iterator = loadTodos(apiService, {type: TodosActions.LOAD_TODOS});
        expect(PUT(iterator.next())).toEqual(loadTodosPending());
        expect(CALL(iterator.next())).toBe(apiService.loadTodoList);
        const todos: ITodo[] = [{
            goal: 'some goal',
            id: 'id',
            status: TodoStatus.NOT_STARTED,
            steps: [],
            title: 'title'
        }];
        expect(PUT(iterator.next(todos))).toEqual(loadTodosSuccess(todos));
        expect(iterator.next().done).toBe(true);
    });

    //TODO: how do I simulate an error?
    it('runs scenario with an error',() => {
        const iterator = loadTodos(apiService, {type: TodosActions.LOAD_TODOS});
        expect(PUT(iterator.next())).toEqual(loadTodosPending());
        expect(CALL(iterator.next())).toBe(apiService.loadTodoList);

        expect(PUT(iterator.next())).toEqual(loadTodosError())

        expect(iterator.next().done).toBe(true);
    });

});