import {css, SimpleInterpolation} from 'styled-components';

export const rem = (px: number): string => {
    return `${px / 16}rem`;
};

export enum MediaType {
    MOBILE = 'only screen and (max-width: 600px)',
    TABLET = 'only screen and (min-width: 601px) and (max-width: 1023px)',
    DESKTOP = 'only screen and (min-width: 1024px)'
}

export interface IHasMediaType {
    mediaType: MediaType
}

const createMediaWrapper = (mediaType: MediaType) =>
    (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) =>
        css`@media ${mediaType} { ${ css(strings, ...interpolations) } }`;

export const media = {
    mobile: createMediaWrapper(MediaType.MOBILE),
    tablet: createMediaWrapper(MediaType.TABLET),
    desktop: createMediaWrapper(MediaType.DESKTOP)
};