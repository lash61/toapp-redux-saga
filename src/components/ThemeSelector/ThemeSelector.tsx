import * as React from 'react';
import {PayloadAction} from 'typesafe-actions/dist/types';

import {
    defaultTheme,
    getThemeByName,
    getThemeName,
    IHasTheme,
    ITheme,
    IThemeMeta,
    themes
} from 'components/Styled/themes';

export interface IProps extends IHasTheme {
    changeTheme: (theme: ITheme) => PayloadAction<'theme/update', ITheme>;
}

const renderOption = (themeMeta: IThemeMeta) => {
    return (
        <option value={themeMeta.name} key={themeMeta.name}>
            {themeMeta.label}
        </option>
    );
};

export const ThemeSelector: React.SFC<IProps> = (props) => {
    const themeName = getThemeName(props.theme);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const theme = getThemeByName(e.target.value);
        props.changeTheme(theme);
    };

    return (
        <div className={props.className}>
            <select value={themeName} onChange={onChange} data-role="theme-selector">
                {themes.map(renderOption)}
            </select>
        </div>
    );
};

ThemeSelector.defaultProps = {theme: defaultTheme};
ThemeSelector.displayName = 'ThemeSelector';

export default ThemeSelector;