import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import {ITodo} from 'domains/types';
import apiFactory from 'service/api';

interface IAppComponentState extends React.ComponentState {
    todos: ITodo[];
}

class App extends React.Component {

    public state: IAppComponentState = {
        todos: []
    };

    public componentDidMount() {
        const api = apiFactory();
        api.loadTodoList().then((todos: ITodo[]) => {
            this.setState(() => ({todos}));
        });
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                {JSON.stringify(this.state.todos)}
            </div>
        );
    }
}

export default App;
