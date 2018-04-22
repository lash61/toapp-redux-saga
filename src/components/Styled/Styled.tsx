import styled from 'styled-components';
import {rem} from './utils';

export const Heading1 = styled.h1`
    margin: 0;
    padding:0;
    font-weight: 700;
    font-size: ${ rem(32) };
    line-height: ${ rem(40) };
`;

export const Heading2 = styled.h2`
    margin: 0;
    padding:0;
    font-weight: 400;
    font-size: ${ rem(24) };
    line-height: ${ rem(32) };
`;

export const Paragraph = styled.p`
    margin: 0;
    padding:0;
    font-weight: 100;
`;