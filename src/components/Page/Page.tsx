import * as React from 'react';

import styled from 'components/Styled/styledComponents';
import {defaultTheme, IHasTheme} from 'components/Styled/themes';

const PageSFC: React.SFC<IHasTheme> = props =>
    <div className={props.className}>{props.children}</div>;

const Page = styled(PageSFC)`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${ props => props.theme.pageBackgroundColor };
    color: ${ props => props.theme.pageMainTextColor };
`;

Page.defaultProps = {theme: defaultTheme};
Page.displayName = 'Page';

export default Page;