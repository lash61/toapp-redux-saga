import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import {IAppState} from './types';

const rootReducer = combineReducers<IAppState>({
    routing: routerReducer
});

export default rootReducer;