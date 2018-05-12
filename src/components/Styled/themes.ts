import * as R from 'ramda';
import * as React from 'react';
import {colors} from './colors';

export interface IHasTheme {
    children?: React.ReactNode
    className?: string,
    theme?: ITheme,
}

export interface ITheme {
    pageBackgroundColor: string,
    pageMainTextColor: string,

    pageHeaderBgColor: string,
    pageTitleColor: string,

    hoverStatusBorderColor: string
    statusBorderColor: string,

    todoCardBorderColor: string
}

export const defaultTheme: ITheme = {
    pageBackgroundColor: colors.WHITE,
    pageMainTextColor: colors.BLACK,

    pageHeaderBgColor: colors.MINE_SHAFT,
    pageTitleColor: colors.WHITE,

    hoverStatusBorderColor: colors.RED,
    statusBorderColor: colors.DOVE_GREY,

    todoCardBorderColor: colors.DOVE_GREY
};

export const darkTheme: ITheme = {
    pageBackgroundColor: colors.BLACK,
    pageMainTextColor: colors.WHITE,

    pageHeaderBgColor: colors.ALTO,
    pageTitleColor: colors.BLACK,

    hoverStatusBorderColor: colors.CYAN,
    statusBorderColor: colors.DUSTY_GREY,

    todoCardBorderColor: colors.DUSTY_GREY
};

export enum Theme {
    LIGHT_THEME = 'LIGHT_THEME',
    DARK_THEME = 'DARK_THEME',
}

export interface IThemeMeta {
    label: string,
    name: Theme,
    theme: ITheme
}

export const themes: IThemeMeta[] = [
    {name: Theme.DARK_THEME, label: 'Dark', theme: darkTheme},
    {name: Theme.LIGHT_THEME, label: 'Light', theme: defaultTheme},
];

export const getThemeByName = (themeName: string) => {
    const themeMeta = R.find(R.propEq('name', themeName))(themes);
    return themeMeta && themeMeta.theme;
};

export const getThemeName = (theme?: ITheme) => {
    const themeMeta = R.find(R.propEq('theme', theme))(themes);
    return themeMeta && themeMeta.name;
};
