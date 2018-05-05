import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator, AnyAction} from 'redux';
import styled from 'styled-components';

import todosActions from 'domains/todos/todosActions';
import {IAppState, ITodo} from 'domains/types';

import {colors} from 'components/Styled/colors';
import {Heading2, Paragraph} from 'components/Styled/Styled';
import {rem} from 'components/Styled/utils';
import TodoStepList from 'components/TodoStepsList/TodoStepList';

const Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    border: 2px solid ${ colors.GREY };
    border-radius: ${ rem(6) };
    margin-bottom: ${ rem(16) };
    padding: ${ rem(20) } ${ rem(16) };
`;
Wrapper.displayName = 'Wrapper';

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

export const Status = Paragraph.extend`
    flex: 1 1 0px;
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 0 ${ rem(5) };
    border-radius: ${ rem(3) };
    border: 1px solid ${ colors.GREY };
    justify-content: center;
    
    &:hover {
      border: 1px solid ${ colors.DARK_GREY };
    }
`;
Status.displayName = 'Status';

export const Goal = Paragraph.extend`
    cursor: pointer;
    padding-top: ${ rem(8) };
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
`;
Goal.displayName = 'Goal';

export interface IProps {
    todo: ITodo;
    selectedTodoId: string;
    selectTodo: ActionCreator<AnyAction>,
    updateTodoStatus: ActionCreator<AnyAction>
}

export const TodoCard: React.SFC<IProps> = (props) => {
    const {todo, selectedTodoId, selectTodo, updateTodoStatus} = props;

    const createGoalClickHandler = (todoId: string) => () => {
        selectTodo(todoId);
    };

    const createStatusClickHandler = (todoId: string) => () => {
        updateTodoStatus(todoId);
    };

    return (
        <Wrapper>
            <HeaderWrapper>
                <CardHeader>{todo.title}</CardHeader>
                <Status onClick={createStatusClickHandler(todo.id)}>{todo.status}</Status>
            </HeaderWrapper>
            <Goal onClick={createGoalClickHandler(todo.id)}>{todo.goal}</Goal>
            {selectedTodoId === todo.id && <TodoStepList steps={todo.steps}/>}
        </Wrapper>
    );
};

const mapStateToProps = (state: IAppState) => {
    return {
        selectedTodoId: state.todosState.selectedTodoId
    };
};

const mapDispatchToProps = {
    selectTodo: todosActions.selectTodo,
    updateTodoStatus: todosActions.updateTodoStatus
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoCard);