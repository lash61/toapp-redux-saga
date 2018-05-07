import {colors} from './colors';

export interface ITheme {
    pageHeaderBgColor: string,
    pageTitleColor: string
}

export const defaultTheme: ITheme = {
    pageHeaderBgColor: colors.MINE_SHAFT,
    pageTitleColor: colors.WHITE
};

export const darkTheme: ITheme = {
    pageHeaderBgColor: colors.ALTO,
    pageTitleColor: colors.BLACK
};