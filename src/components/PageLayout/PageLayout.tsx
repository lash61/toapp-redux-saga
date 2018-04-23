import * as React from 'react';
import styled from 'styled-components';

import {colors} from 'components/Styled/colors';
import {Heading1} from 'components/Styled/Styled';
import {rem} from 'components/Styled/utils';

const Page = styled.div`
    display: flex;
    flex-direction: column;
`;
Page.displayName = 'Page';

const PageHeader = styled.header`
    display: flex;
    align-items: center;
    height: ${ rem(60) };
    padding: ${ rem(20) };
    background-color: ${ colors.DARK_GREY };
`;
PageHeader.displayName = 'PageHeader';

const PageTitle = Heading1.extend`color: ${ colors.WHITE };`;
PageTitle.displayName = 'PageTitle';

const PageContentHolder = styled.div`padding-top: ${ rem(16) };`;
PageContentHolder.displayName = 'PageContentHolder';

export interface IProps {
    children: React.ReactChild;
}

const PageLayout: React.SFC<IProps> = (props) => {
    const {children} = props;
    return (
        <Page>
            <PageHeader>
                <PageTitle>Welcome to TodoApp</PageTitle>
            </PageHeader>
            <PageContentHolder>{children}</PageContentHolder>
        </Page>
    );
};

export default PageLayout