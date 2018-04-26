import {Action} from 'redux';
import {runSaga, RunSagaOptions} from 'redux-saga';

import {IAppState, ITodo} from 'domains/types';
import {IApiService} from 'service/api';

import todosActions, {TodosActions} from './todosActions';

import {loadTodos, updateTodoStatus} from './todosSaga';

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
            loadTodoList: jest.fn(),
            updateTodoStatus: jest.fn(),
        };
    });

    it('executes scenario with a successful response for loadTodos', async () => {
        const returnedTodos: ITodo[] = [];
        apiService.loadTodoList = jest.fn(() => Promise.resolve(returnedTodos));

        await runSaga(storeInterface, loadTodos, apiService as IApiService).done;

        expect(apiService.loadTodoList).toHaveBeenCalled();

        expect(dispatched.length).toBe(2);
        expect(dispatched[0]).toEqual(todosActions.loadTodosPending());
        expect(dispatched[1]).toEqual(todosActions.loadTodosSuccess(returnedTodos));
    });

    it('executes scenario with a failed response for loadTodos', async () => {
        apiService.loadTodoList = jest.fn(() => Promise.reject('Error!'));

        await runSaga(storeInterface, loadTodos, apiService as IApiService).done;

        expect(apiService.loadTodoList).toHaveBeenCalled();

        expect(dispatched.length).toBe(2);
        expect(dispatched[0]).toEqual(todosActions.loadTodosPending());
        expect(dispatched[1]).toEqual(todosActions.loadTodosError());
    });

    it('executes scenario with a successful response for updateTodoStatus', async () => {
        const returnedTodos: ITodo[] = [];
        apiService.updateTodoStatus = jest.fn(() => Promise.resolve(returnedTodos));
        const action = {
            payload: 'some-id',
            type: TodosActions.UPDATE_STATUS
        };

        await runSaga(storeInterface, updateTodoStatus, apiService as IApiService, action).done;

        expect(apiService.updateTodoStatus).toHaveBeenCalledWith('some-id');

        expect(dispatched.length).toBe(2);
        expect(dispatched[0]).toEqual(todosActions.updateTodoStatusPending());
        expect(dispatched[1]).toEqual(todosActions.updateTodoStatusSuccess(returnedTodos));
    });

    it('executes scenario with a failed response for updateTodoStatus', async () => {
        apiService.updateTodoStatus = jest.fn(() => Promise.reject('Error!'));
        const action = {
            payload: 'some-id',
            type: TodosActions.UPDATE_STATUS
        };

        await runSaga(storeInterface, updateTodoStatus, apiService as IApiService, action).done;

        expect(apiService.updateTodoStatus).toHaveBeenCalledWith('some-id');

        expect(dispatched.length).toBe(2);
        expect(dispatched[0]).toEqual(todosActions.updateTodoStatusPending());
        expect(dispatched[1]).toEqual(todosActions.updateTodoStatusError());
    });

});
