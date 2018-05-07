import './index.css';

import {History} from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Store} from 'redux';

import {ThemeProvider} from 'components/Styled/styledComponents';
import {darkTheme} from 'components/Styled/themes';
import initStore from 'domains/initStore';
import {IAppState} from 'domains/types';

import RouterComponent from 'components/RouterComponent/RouterComponent';

const store: Store<IAppState> = initStore();
const history: History = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
            <RouterComponent history={history}/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

