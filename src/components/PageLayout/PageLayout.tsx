import * as React from 'react';

import logo from './logo.svg';

import './PageLayout.css';

export interface IProps {
    children: React.ReactChild
}

const PageLayout: React.SFC<IProps> = (props) => {
    const {children} = props;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            {children}
        </div>
    );
};

export default PageLayout