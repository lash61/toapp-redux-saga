import {shallow} from 'enzyme';
import * as React from 'react';

import Status, {ITodoStatusProps} from './Status';

describe('Status', () => {

    it('renders a component', () => {
        const props: ITodoStatusProps = {
            children: 'Some text',
            onClick: jest.fn()
        };
        const render = shallow(<Status {...props}/>);
        expect(render.getElement()).toMatchSnapshot();

        const diveRender = shallow(<Status {...props}/>).dive();
        expect(diveRender.getElement()).toMatchSnapshot();
    });

});