import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import {IAppState} from './types';

const initStore = (): Store<IAppState> => {
    const middlewares = [
        thunk
    ];

    const enhancer = process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares);

    return createStore<IAppState>(rootReducer, enhancer);
};

export default initStore;