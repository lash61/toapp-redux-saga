import {Action} from 'redux';
import {runSaga, RunSagaOptions} from 'redux-saga';

import {IAppState, ITodo} from 'domains/types';
import {IApiService} from 'service/api';

import {loadTodosError, loadTodosPending, loadTodosSuccess} from './todosActions';

import {loadTodos} from './todosSaga';

describe('loadTodos', () => {

    let dispatched: Action[] = [];
    const storeInterface: RunSagaOptions<Action, IAppState> = {
        dispatch: (action) => dispatched.push(action),
    };

    let apiService: IApiService;

    beforeEach(() => {
        dispatched = [];

        apiService = {
            loadTodo: jest.fn(),
            loadTodoList: jest.fn()
        };
    });

    it('executes scenario with a successful response', async () => {
        const returnedTodos: ITodo[] = [];
        apiService.loadTodoList = jest.fn(() => Promise.resolve(returnedTodos));

        await runSaga(storeInterface, loadTodos, apiService as IApiService).done;

        expect(apiService.loadTodoList).toHaveBeenCalled();

        expect(dispatched.length).toBe(2);
        expect(dispatched[0]).toEqual(loadTodosPending());
        expect(dispatched[1]).toEqual(loadTodosSuccess(returnedTodos));
    });

    it('executes scenario with a failed response', async () => {
        apiService.loadTodoList = jest.fn(() => Promise.reject('Error!'));

        await runSaga(storeInterface, loadTodos, apiService as IApiService).done;

        expect(apiService.loadTodoList).toHaveBeenCalled();

        expect(dispatched.length).toBe(2);
        expect(dispatched[0]).toEqual(loadTodosPending());
        expect(dispatched[1]).toEqual(loadTodosError());
    });

});