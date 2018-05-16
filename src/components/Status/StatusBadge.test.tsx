import {shallow} from 'enzyme';
import * as React from 'react';

import StatusBadge from './StatusBadge';

describe('StatusBadge', () => {
    it('renders a component', () => {
        const props = {};
        const render = shallow(<StatusBadge {...props}/>);
        expect(render.getElement()).toMatchSnapshot();
    });
});