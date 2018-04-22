import * as React from 'react';
import styled from 'styled-components';

export interface IProps {
    children: React.ReactChild
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;
Page.displayName = 'Page';

const PageHeader = styled.header`
  background-color: #222;
  height: 60px;
  padding: 20px;
  color: white;
`;
PageHeader.displayName = 'PageHeader';

const PageTitle = styled.h1`
  font-size: 1.5rem;
`;
PageTitle.displayName = 'PageTitle';

const PageContentHolder = styled.div`
  padding-top: 1rem;
`;
PageContentHolder.displayName = 'PageContentHolder';

const PageLayout: React.SFC<IProps> = (props) => {
    const { children } = props;
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