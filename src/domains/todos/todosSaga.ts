import {AnyAction} from 'redux';
import {call, put, takeLatest} from 'redux-saga/effects';

import {IServiceMap} from 'service/services';
import {loadTodosError, loadTodosPending, loadTodosSuccess, TodosActions} from './todosActions';

export const loadTodos = (serviceMap: IServiceMap) => function* (action: AnyAction) {
    const {apiService} = serviceMap;

    yield put(loadTodosPending());

    try {
        const todos = yield call(apiService.loadTodoList);
        yield put(loadTodosSuccess(todos));
    } catch (e) {
        yield put(loadTodosError());
    }
};

function* todosSaga(serviceMap: IServiceMap) {
    yield takeLatest(TodosActions.LOAD_TODOS, loadTodos(serviceMap));
}

export default todosSaga;
