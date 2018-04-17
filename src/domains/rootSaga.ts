import {fork} from 'redux-saga/effects';

import todosSaga from './todos/todosSaga';

import {IServiceMap} from 'service/services';

function* rootSaga(serviceMap: IServiceMap) {
    yield [
        fork(todosSaga, serviceMap)
    ];
}

export default rootSaga;