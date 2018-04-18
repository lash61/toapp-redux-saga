import {call, put, takeLatest} from 'redux-saga/effects';

import {IApiService} from "service/api";
import {IServiceMap} from 'service/services';
import {loadTodosError, loadTodosPending, loadTodosSuccess, TodosActions} from './todosActions';

export function* loadTodos(apiService: IApiService) {
    yield put(loadTodosPending());

    try {
        const todos = yield call(apiService.loadTodoList);
        yield put(loadTodosSuccess(todos));
    } catch (e) {
        yield put(loadTodosError());
    }
}

function* todosSaga(serviceMap: IServiceMap) {
    yield takeLatest(TodosActions.LOAD_TODOS, loadTodos, serviceMap.apiService);
}

export default todosSaga;
