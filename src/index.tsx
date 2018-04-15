import {History} from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Route, Router} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Store} from 'redux';

import initStore from 'domains/initStore';
import {IAppState} from 'domains/types';

import App from './App';
import './index.css';

const store: Store<IAppState> = initStore();
const history: History = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

