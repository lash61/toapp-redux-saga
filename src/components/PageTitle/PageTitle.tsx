import * as React from 'react';

import {Heading1} from 'components/Styled/Styled';
import styled from 'components/Styled/styledComponents';
import {defaultTheme, ITheme} from 'components/Styled/themes';

export interface IPageTitleProps {
    theme?: ITheme,
    className?: string,
    children: React.ReactNode
}

const Title: React.SFC<IPageTitleProps> = props =>
    <Heading1 className={props.className}>{props.children}</Heading1>;

const PageTitle = styled(Title)`color: ${ props => props.theme.pageTitleColor };`;

PageTitle.defaultProps = {
    theme: defaultTheme
};
PageTitle.displayName = 'PageTitle';

export default PageTitle;
