import {shallow} from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import {LoadingStates} from 'domains/loadingStates';

import LoadingIndicator, {Cover, IProps} from './LoadingIndicator';

describe('Loading indicator', () => {
    let defaultProps: IProps;
    beforeEach(() => {
        defaultProps = {
            children: <div>Some content here</div>,
            loadingState: LoadingStates.COMPLETE
        };
    });

    it('hides Cover if loading state is LoadingStates.COMPLETE', () => {
        const render = shallow(<LoadingIndicator {...defaultProps} />);
        expect(render.find(Cover).props().visible).toBe(false);
        expect(render.getElement()).toMatchSnapshot();
    });

    it('shows Cover if loading state is LoadingStates.LOADING', () => {
        defaultProps.loadingState = LoadingStates.LOADING
        const render = shallow(<LoadingIndicator {...defaultProps} />);
        expect(render.find(Cover).props().visible).toBe(true);
        expect(render.getElement()).toMatchSnapshot();
    });

});

describe('Cover', () => {
    it('applies display: block style for visible state', () => {
        const render = shallow(<Cover visible={true}/>);
        expect(render).toHaveStyleRule('display', 'flex');
    });

    it('applies display: none style for hidden state', () => {
        const render = shallow(<Cover visible={false}/>);
        expect(render).toHaveStyleRule('display', 'none');
    });
});