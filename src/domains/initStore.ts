import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import {IAppState} from './types';
import {createDriver} from './window/windowDriver';

import serviceMapFactory from 'service/services';

const initStore = (): Store<IAppState> => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [
        thunk,
        sagaMiddleware
    ];

    const enhancer = process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares);

    const store = createStore<IAppState>(rootReducer, enhancer);

    const servicesMap = serviceMapFactory();
    sagaMiddleware.run(rootSaga, servicesMap);

    const driver = createDriver(window, store);
    driver.start();

    return store;
};

export default initStore;