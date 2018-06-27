## TodoApp - The project
TodoApp is simple practice project.
My goals are to familiarize myself with:
    
    - static typing using Typescript;
    - redux-saga, as a means of handling requests to the backend and other side-efffects;
    - styled-components for it's approach to applying visuals to components;
    - some koa backend, especially launch scripts and routing;
    - e2e tests with testCafe;
    - lokijs javascript database
    
I'm trying to maintain a reasonable level of test coverage in the front-end.
Redux-saga and styled-components bring in some special testing techniques and patterns.

## TodoApp - The app
At the moment the app loads the pre-defined list of Todos from the backend.
The list is taken from `todoList.json` and contains a brief description of steps executed during the creation of this app.

The list is represented on the screen with cards, each card has a title, completion status and a goal.
By clicking on the goal a user can expand an collapse the details on the card. There can be only one expanded card on the page.
Clicking on the status launches a call to the backend, where the status is updated to next one.

Any status updates will be persisted during the session. Restarting the backend will reset the updated statuses.
Every call to the backend has some latency applied to it, to make it feel more like an actual call via network.

## About
This project has been bootstrapped with Create-React-App using `--scripts-version=react-scripts-ts`

## How to run
To run the app first start the backend by executing `yarn koa` from the cmd. Backend will be launched on localhost port 8090.
Then execute `yarn start` from another instance of cmd. Frontend will be launched on localhost port 3000.
In order to run e2e tests first start the app and execute `yarn e2e` in a separate cmd.
As with all apps that use react-scripts, there are other actions available through cmd.
