import * as React from 'react';
import styled from 'styled-components';

import {LoadingStates} from 'domains/loadingStates';

import {colors} from 'components/Styled/colors';
import {rem} from 'components/Styled/utils';

import logo from './logo.svg';

const Outer = styled.div`
    position: relative;
    min-height: ${ rem(100)};
`;
Outer.displayName = 'Outer';

const Inner = styled.div``;
Inner.displayName = 'Inner';

interface ICoverProps {
    visible: boolean;
}

export const Cover = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0.75;
    position: absolute;
    align-items: center;
    justify-content: center;
    background: ${ colors.WHITE };
    display: ${ (props: ICoverProps) => props.visible ? 'flex' : 'none' }
`;
Cover.displayName = 'Cover';

const Logo = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: ${ rem(80) }
    
    @keyframes App-logo-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
Logo.displayName = 'Logo';

export interface IProps {
    loadingState: LoadingStates,
    children: React.ReactChildren | React.ReactChild
}

const LoadingIndicator: React.SFC<IProps> = (props) => {
    return (
        <Outer>
            <Cover visible={LoadingStates.LOADING === props.loadingState}>
                <Logo src={logo}/>
            </Cover>
            <Inner>
                {props.children}
            </Inner>
        </Outer>
    );
};

export default LoadingIndicator;