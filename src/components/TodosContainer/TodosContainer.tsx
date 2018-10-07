import * as React from 'react';
import {connect} from 'react-redux';
import {EmptyAction} from 'typesafe-actions/dist/types';

import {LoadingStates} from 'domains/loadingStates';
import todosActions from 'domains/todos/todosActions';
import {ITodo} from 'domains/todos/todosTypes';
import {IAppState} from 'domains/types';

import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import TodosList from 'components/TodosList/TodosList';

interface IProps {
    loadingState: LoadingStates,
    todos: ITodo[],
    loadTodos: () => EmptyAction<'todos/load'>;
}

export class TodosContainer extends React.Component<IProps> {

    public componentDidMount() {

        this.props.loadTodos();
    }

    public render() {
        const {loadingState, todos} = this.props;
        return (
            <LoadingIndicator loadingState={loadingState}>
                <TodosList todos={todos}/>
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
