import './index.css';

import {History} from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Store} from 'redux';

import initStore from 'domains/initStore';
import {IAppState} from 'domains/types';

import RouterComponent from 'components/RouterComponent/RouterComponent';

console.log('Build version: ', process.env.REACT_APP_VERSION);

const store: Store<IAppState> = initStore();
const history: History = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <RouterComponent history={history}/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
