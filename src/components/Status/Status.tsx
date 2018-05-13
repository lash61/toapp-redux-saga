import * as React from 'react';

import {Paragraph} from 'components/Styled/Styled';
import styled from 'components/Styled/styledComponents';
import {defaultTheme, IHasTheme} from 'components/Styled/themes';
import {IHasMediaType, MediaType, rem} from 'components/Styled/utils';
import {TodoStatus} from 'domains/todos/todosTypes';

export interface ITodoStatusProps extends IHasTheme {
    status: TodoStatus;
    onClick: () => void;
}

const StatusSFC: React.SFC<ITodoStatusProps> = props =>
    <Paragraph className={props.className}
               onClick={props.onClick}>
        {props.status}
    </Paragraph>;

const StatusBadge = styled(StatusSFC)`
    flex: 1 1 0px;
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 0 ${ rem(5) };
    border-radius: ${ rem(3) };
    border: 1px solid ${ props => props.theme.statusBorderColor };
    justify-content: center;
    
    &:hover {
      border: 1px solid ${ props => props.theme.hoverStatusBorderColor };
    }
`;

const Status: React.SFC<ITodoStatusProps & IHasMediaType> = props => {
    const {mediaType, status, onClick} = props;
    if (mediaType === MediaType.MOBILE) {
        return <div/>;
    }
    return <StatusBadge status={status} onClick={onClick}/>;
};

Status.defaultProps = {theme: defaultTheme};
Status.displayName = 'Status';

export default Status;