import * as React from 'react';

import Page from 'components/Page/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import PageTitle from 'components/PageTitle/PageTitle';
import styled from 'components/Styled/styledComponents';

const PageContentHolder = styled.div`
    flex: 1 0 0px;
    overflow-y: scroll;
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
