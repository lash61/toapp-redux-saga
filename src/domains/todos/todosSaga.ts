import {AnyAction} from 'redux';
import {all, call, put, takeLatest} from 'redux-saga/effects';

import {IApiService} from 'service/api';
import {IServiceMap} from 'service/services';
import todosActions, {TodosActions} from './todosActions';

export function* loadTodos(apiService: IApiService) {
    yield put(todosActions.loadTodosPending());

    try {
        const todos = yield call(apiService.loadTodoList);
        yield put(todosActions.loadTodosSuccess(todos));
    } catch (e) {
        yield put(todosActions.loadTodosError());
    }
}

export function* updateTodoStatus(apiService: IApiService, action: AnyAction) {
    yield put(todosActions.updateTodoStatusPending());

    try {
        const todos = yield call(apiService.updateTodoStatus, action.payload);
        yield put(todosActions.updateTodoStatusSuccess(todos));
    } catch (e) {
        yield put(todosActions.updateTodoStatusError());
    }
}

function* todosSaga(serviceMap: IServiceMap) {
    yield all([
        takeLatest(TodosActions.LOAD_TODOS, loadTodos, serviceMap.apiService),
        takeLatest(TodosActions.UPDATE_STATUS, updateTodoStatus, serviceMap.apiService),
    ]);

}

export default todosSaga;
