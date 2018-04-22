import {shallow} from 'enzyme';
import * as React from 'react';

import PageLayout, {IProps} from './PageLayout';

describe('PageLayout', () => {

    it('renders a component', () => {
        const defaultProps: IProps = {
            children: <div>Children</div>
        };
        const layout = shallow(<PageLayout {...defaultProps} />);
        expect(layout.getElement()).toMatchSnapshot();
    });
});
