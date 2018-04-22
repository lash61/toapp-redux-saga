import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator, AnyAction} from 'redux';

import {LoadingStates} from 'domains/loadingStates';
import * as todosActions from 'domains/todos/todosActions';
import {IAppState, ITodo} from 'domains/types';

import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';

interface IProps {
    loadingState: LoadingStates,
    todos: ITodo[],
    loadTodos: ActionCreator<AnyAction>
}

export class TodosContainer extends React.Component<IProps> {

    public componentDidMount() {
        this.props.loadTodos();
    }

    public render() {
        const {loadingState, todos} = this.props;
        return (
            <LoadingIndicator loadingState={loadingState}>
                <div>{JSON.stringify(todos)}</div>
            </LoadingIndicator>
        );
    }

}

const mapStateToProps = (state: IAppState) => {
    return {
        loadingState: state.todosState.loadingState,
        todos: state.todosState.todos
    }
};

const mapDispatchToProps = {
    loadTodos: todosActions.loadTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
