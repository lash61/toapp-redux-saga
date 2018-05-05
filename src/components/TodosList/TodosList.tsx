import * as React from 'react';
import styled from 'styled-components';

import {ITodo} from 'domains/todos/todosTypes';

import {rem} from 'components/Styled/utils';
import TodoCard from 'components/TodoCard/TodoCard';

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    box-sizing: border-box;
    padding: 0 ${ rem(20) }
    flex-direction: column;
    max-width: ${ rem(960) };
`;
Wrapper.displayName = 'Wrapper';

export interface IProps {
    todos: ITodo[];
}

const TodosList: React.SFC<IProps> = (props) => {
    const {todos} = props;
    return (
        <Wrapper>
            {todos.map((todo: ITodo) =>
                <TodoCard todo={todo} key={todo.id}/>
            )}
        </Wrapper>
    );
};

export default TodosList;