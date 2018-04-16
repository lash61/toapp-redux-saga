import {all} from 'redux-saga/effects';

import todosSaga from './todos/todosSaga';

import {IServiceMap} from 'service/services';

function* watchAll(serviceMap: IServiceMap) {
    yield all([
        todosSaga(serviceMap)
    ]);
}

export default watchAll;