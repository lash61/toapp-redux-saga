import * as React from 'react';
import {colors} from './colors';

export interface IHasTheme {
    children: React.ReactNode
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

    hoverStatusBorderColor: colors.MINE_SHAFT,
    statusBorderColor: colors.DOVE_GREY,

    todoCardBorderColor: colors.DOVE_GREY
};

export const darkTheme: ITheme = {
    pageBackgroundColor: colors.BLACK,
    pageMainTextColor: colors.WHITE,

    pageHeaderBgColor: colors.ALTO,
    pageTitleColor: colors.BLACK,

    hoverStatusBorderColor: colors.ALTO,
    statusBorderColor: colors.DUSTY_GREY,

    todoCardBorderColor: colors.DUSTY_GREY
};