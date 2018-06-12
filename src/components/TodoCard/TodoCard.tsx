import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator, AnyAction} from 'redux';

import todosActions from 'domains/todos/todosActions';
import {ITodo} from 'domains/todos/todosTypes';
import {IAppState} from 'domains/types';

import Status from 'components/Status/Status';
import {Heading2, Paragraph} from 'components/Styled/Styled';
import styled from 'components/Styled/styledComponents';
import {IHasMediaType, rem} from 'components/Styled/utils';
import TodoCardWrapper from 'components/TodoCardWrapper/TodoCardWrapper';
import TodoStepList from 'components/TodoStepsList/TodoStepList';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
HeaderWrapper.displayName = 'HeaderWrapper';

const CardHeader = Heading2.extend`
    flex: 5 1 0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 ${ rem(10) } 0 0;
`;
CardHeader.displayName = 'CardHeader';

export const Goal = Paragraph.extend`
    cursor: pointer;
    padding-top: ${ rem(8) };
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
`;
Goal.displayName = 'Goal';

export interface IProps extends IHasMediaType {
    todo: ITodo;
    selectedTodoId: string;
    index: number,
    selectTodo: ActionCreator<AnyAction>;
    updateTodoStatus: ActionCreator<AnyAction>
}

export const TodoCard: React.SFC<IProps> = (props) => {
    const {todo, selectedTodoId, selectTodo, updateTodoStatus, mediaType, index} = props;

    const createGoalClickHandler = (todoId: string) => () => {
        selectTodo(todoId);
    };

    const createStatusClickHandler = (todoId: string) => () => {
        updateTodoStatus(todoId);
    };

    return (
        <TodoCardWrapper>
            <HeaderWrapper>
                <CardHeader>{todo.title}</CardHeader>
                <Status onClick={createStatusClickHandler(todo.id)}
                        status={todo.status}
                        mediaType={mediaType}
                        dataRole={`todo-card-status-${ index }`}
                />
            </HeaderWrapper>
            <Goal onClick={createGoalClickHandler(todo.id)}
                  data-role={`todo-card-goal-${index}`}>
                {todo.goal}
            </Goal>
            {selectedTodoId === todo.id &&
             <TodoStepList steps={todo.steps} dataRole={`todo-card-step-list-${index}`}/>}
        </TodoCardWrapper>
    );
};

const mapStateToProps = (state: IAppState) => {
    return {
        mediaType: state.windowState.mediaType,
        selectedTodoId: state.todosState.selectedTodoId
    };
};

const mapDispatchToProps = {
    selectTodo: todosActions.selectTodo,
    updateTodoStatus: todosActions.updateTodoStatus
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoCard);