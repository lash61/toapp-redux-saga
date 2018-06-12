import * as React from 'react';

import {ITodoStep} from 'domains/todos/todosTypes';

import styled from 'components/Styled/styledComponents';
import {rem} from 'components/Styled/utils';

export const OrderedList = styled.ol`margin: 0;`;
OrderedList.displayName = 'OrderedList';

const ListItem = styled.li`
    padding-bottom: ${ rem(10) };
    
    &:first-child {
      padding-top: ${ rem(10) };
    }
    
    &:last-child {
      padding-bottom: 0;  
    }
`;
ListItem.displayName = 'ListItem';

const Bold = styled.span`
    font-weight: bold;
    margin-right: ${ rem(5) };
`;
Bold.displayName = 'Bold';

export interface IProps {
    steps: ITodoStep[],
    dataRole: string
}

const TodoStepList: React.SFC<IProps> = (props) => {
    const {steps, dataRole} = props;
    return (
        <OrderedList data-role={ dataRole }>
            {steps.map((step: ITodoStep) => {
                return <ListItem key={step.id}>
                    <Bold>{step.title}:</Bold>
                    <span>{step.details}</span>
                </ListItem>
            })}
        </OrderedList>
    );
};

export default TodoStepList;
