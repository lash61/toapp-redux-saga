import {History} from 'history';
import * as React from 'react';
import {Route, Router} from 'react-router';

import App from './App';
import TodosContainer from './components/TodosContainer/TodosContainer';

const createRouter = (history: History) => {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="todos" component={TodosContainer}/>
            </Route>
        </Router>
    );
};

export default createRouter;