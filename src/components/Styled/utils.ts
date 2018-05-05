import {css, SimpleInterpolation} from 'styled-components';

export const rem = (px: number): string => {
    return `${px / 16}rem`;
};

enum MediaTypes {
    MOBILE = 'only screen and (max-width: 600px)',
    TABLET = 'only screen and (min-width: 601px) and (max-width: 1023px)',
    DESKTOP = 'only screen and (min-width: 1024px)'
}

const createMediaWrapper = (mediaType: MediaTypes) =>
    (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) =>
        css`@media ${mediaType} { ${ css(strings, ...interpolations) } }`;

export const media = {
    mobile: createMediaWrapper(MediaTypes.MOBILE),
    tablet: createMediaWrapper(MediaTypes.TABLET),
    desktop: createMediaWrapper(MediaTypes.DESKTOP)
};