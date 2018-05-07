import * as React from 'react';
import {ActionCreator} from 'redux';

import styled from 'components/Styled/styledComponents';
import {defaultTheme, getThemeByName, getThemeName, IHasTheme, IThemeMeta, themes} from 'components/Styled/themes';
import {IThemeUpdatedAction} from 'domains/theme/themeActions';

export interface IProps extends IHasTheme {
    changeTheme: ActionCreator<IThemeUpdatedAction>
}

const renderOption = (themeMeta: IThemeMeta) => {
    return (
        <option value={themeMeta.name} key={themeMeta.name}>
            {themeMeta.label}
        </option>
    );
};

export const Selector: React.SFC<IProps> = (props) => {
    const themeName = getThemeName(props.theme);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const theme = getThemeByName(e.target.value);
        props.changeTheme(theme);
    };

    return (
        <div className={props.className}>
            <select value={themeName} onChange={onChange}>
                {themes.map(renderOption)}
            </select>
        </div>
    );
};
Selector.displayName = 'Selector';

export const ThemeSelector = styled(Selector)`flex: 0 0 0px;`;
ThemeSelector.defaultProps = {theme: defaultTheme};
ThemeSelector.displayName = 'ThemeSelector';

export default ThemeSelector;