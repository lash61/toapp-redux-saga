import * as React from 'react';

import styled from 'components/Styled/styledComponents';
import {defaultTheme, ITheme} from 'components/Styled/themes';
import {rem} from 'components/Styled/utils';

export interface IPageHeaderProps {
    theme?: ITheme,
    className?: string,
    children: React.ReactNode
}

const Header: React.SFC<IPageHeaderProps> = props =>
    <header className={props.className}>{props.children}</header>;

const PageHeader = styled(Header)`
    display: flex;
    align-items: center;
    padding: ${ rem(20) };
    flex: 0 0 ${ rem(40) };
    background-color: ${ props => props.theme.pageHeaderBgColor };
`;

PageHeader.defaultProps = {theme: defaultTheme};
PageHeader.displayName = 'PageHeader';

export default PageHeader;