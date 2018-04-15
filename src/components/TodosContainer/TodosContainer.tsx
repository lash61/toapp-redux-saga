import * as React from 'react';
import {connect} from 'react-redux';
import {AnyAction} from 'redux';

import * as todosActions from 'domains/todos/todosActions';
import {IAppState, ITodo} from 'domains/types';

interface IProps {
    todos: ITodo[],
    loadTodos: () => () => Promise<AnyAction>
}

export class TodosContainer extends React.Component<IProps> {

    public componentDidMount() {
        this.props.loadTodos();
    }

    public render() {
        const {todos} = this.props;
        return (
            <div>{JSON.stringify(todos)}</div>
        );
    }

}

const mapStateToProps = (state: IAppState) => {
    return {
        todos: state.todosState.todos
    }
};

const mapDispatchToProps = {
    loadTodos: todosActions.loadTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
