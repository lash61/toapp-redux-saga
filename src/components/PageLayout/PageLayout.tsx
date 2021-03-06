import * as React from 'react';
import {connect} from 'react-redux';
import {PayloadAction} from 'typesafe-actions/dist/types';

import Page from 'components/Page/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import PageTitle from 'components/PageTitle/PageTitle';
import styled, {ThemeProvider} from 'components/Styled/styledComponents';
import {IHasTheme, ITheme} from 'components/Styled/themes';
import ThemeSelector from 'components/ThemeSelector/ThemeSelector';
import themeActions from 'domains/theme/themeActions';
import {IAppState} from 'domains/types';

const PageContentHolder = styled.main`
    flex: 1 0 0px;
    overflow-y: scroll;
`;
PageContentHolder.displayName = 'PageContentHolder';

export interface IProps extends IHasTheme {
    changeTheme: (theme: ITheme) => PayloadAction<'theme/update', ITheme>;
}

export const PageLayout: React.SFC<IProps> = (props) => {
    const {children} = props;
    return (
        <ThemeProvider theme={props.theme}>
            <Page>
                <PageHeader>
                    <PageTitle>Welcome to TodoApp</PageTitle>
                    <ThemeSelector theme={props.theme} changeTheme={props.changeTheme}/>
                </PageHeader>
                <PageContentHolder>{children}</PageContentHolder>
            </Page>
        </ThemeProvider>
    );
};

const mapStateToProps = (state: IAppState) => ({
    theme: state.themeState.theme
});

const mapActionCreatorsToProps = {
    changeTheme: themeActions.updateTheme
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(PageLayout);
