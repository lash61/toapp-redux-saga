import * as React from 'react';

import styled from 'components/Styled/styledComponents';
import {defaultTheme, IHasTheme} from 'components/Styled/themes';
import {rem} from 'components/Styled/utils';

const Wrapper: React.SFC<IHasTheme> = props =>
    <div className={props.className}>{props.children}</div>;

const TodoCardWrapper = styled(Wrapper)`
    width: 100%;
    box-sizing: border-box;
    border: 2px solid ${ props => props.theme.todoCardBorderColor };
    border-radius: ${ rem(6) };
    margin-bottom: ${ rem(16) };
    padding: ${ rem(20) } ${ rem(16) };
    
    &:first-child {
      margin-top: ${ rem(16) };    
    }
`;

TodoCardWrapper.defaultProps = {theme: defaultTheme};
TodoCardWrapper.displayName = 'TodoCardWrapper';

export default TodoCardWrapper;