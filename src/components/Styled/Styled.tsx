import styled from 'styled-components';
import {media, rem} from './utils';

export const Heading1 = styled.h1`
    margin: 0;
    padding:0;
    font-weight: 700;
    font-size: ${ rem(24) };
    line-height: ${ rem(32) };
    
    ${ media.tablet`
        font-size: ${ rem(28) };
        line-height: ${ rem(36) };
    `}

    ${ media.desktop`
        font-size: ${ rem(32) };
        line-height: ${ rem(40) };
    `}
`;

export const Heading2 = styled.h2`
    margin: 0;
    padding:0;
    font-weight: 400;
    font-size: ${ rem(20) };
    line-height: ${ rem(28) };
    
    ${ media.tablet`
        font-size: ${ rem(22) };
        line-height: ${ rem(30) };
    `}

    ${ media.desktop`
        font-size: ${ rem(24) };
        line-height: ${ rem(32) };
    `}
`;

export const Paragraph = styled.p`
    margin: 0;
    padding:0;
    font-weight: 100;
    font-size: ${ rem(12) };
    line-height: ${ rem(16) };
    
    ${ media.tablet`
        font-size: ${ rem(14) };
        line-height: ${ rem(16) };
    `}
    
    ${ media.desktop`
        font-size: ${ rem(16) };
        line-height: ${ rem(18) };
    `}
`;