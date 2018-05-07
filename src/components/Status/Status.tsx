import * as React from 'react';

import {Paragraph} from 'components/Styled/Styled';
import styled from 'components/Styled/styledComponents';
import {defaultTheme, IHasTheme} from 'components/Styled/themes';
import {rem} from 'components/Styled/utils';

export interface ITodoStatusProps extends IHasTheme {
    onClick: () => void;
}

const StatusSFC: React.SFC<ITodoStatusProps> = props =>
    <Paragraph className={props.className}
               onClick={props.onClick}>
        {props.children}
    </Paragraph>;

const Status = styled(StatusSFC)`
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

Status.defaultProps = {theme: defaultTheme};
Status.displayName = 'Status';

export default Status;