import * as React from 'react';

import {Heading1} from 'components/Styled/Styled';
import styled from 'components/Styled/styledComponents';
import {defaultTheme, IHasTheme} from 'components/Styled/themes';

const Title: React.SFC<IHasTheme> = props =>
    <Heading1 className={props.className}>{props.children}</Heading1>;

const PageTitle = styled(Title)`color: ${ props => props.theme.pageTitleColor };`;

PageTitle.defaultProps = {theme: defaultTheme};
PageTitle.displayName = 'PageTitle';

export default PageTitle;
