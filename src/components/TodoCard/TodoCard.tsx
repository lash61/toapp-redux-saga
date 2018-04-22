import * as React from 'react';
import styled from 'styled-components';

import {colors} from 'components/Styled/colors';
import {Heading2, Paragraph} from 'components/Styled/Styled';
import {rem} from 'components/Styled/utils';

import {ITodo} from 'domains/types';

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

const CardHeader = Heading2.extend`flex: 5 1 0px;`;
CardHeader.displayName = 'CardHeader';

const Status = styled.div`
    flex: 1 1 0px;
    display: flex;
    padding: 0 ${ rem(5) }
    align-items: center;
    justify-content: center;
`;
Status.displayName = 'Status';

const Goal = Paragraph.extend`padding-top: ${ rem(8) };`;
Goal.displayName = 'Goal';

export interface IProps {
    todo: ITodo;
}

const TodoCard: React.SFC<IProps> = (props) => {
    const {todo} = props;
    return (
        <Wrapper>
            <HeaderWrapper>
                <CardHeader>{todo.title}</CardHeader>
                <Status>{todo.status}</Status>
            </HeaderWrapper>
            <Goal>{todo.goal}</Goal>
        </Wrapper>
    );
};

export default TodoCard;