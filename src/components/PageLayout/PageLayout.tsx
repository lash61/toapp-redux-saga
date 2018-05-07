import * as React from 'react';

import PageHeader from 'components/PageHeader/PageHeader';
import PageTitle from 'components/PageTitle/PageTitle';
import styled from 'components/Styled/styledComponents';
import {rem} from 'components/Styled/utils';

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
Page.displayName = 'Page';

const PageContentHolder = styled.div`
    flex: 1 0 0px;
    overflow-y: scroll;
    padding-top: ${ rem(16) };
`;
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

export default PageLayout;
