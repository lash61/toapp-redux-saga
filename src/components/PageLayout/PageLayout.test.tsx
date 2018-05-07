import {shallow} from 'enzyme';
import * as React from 'react';

import {IProps, PageLayout} from './PageLayout';

describe('PageLayout', () => {

    it('renders a component', () => {
        const defaultProps: IProps = {
            changeTheme: jest.fn(),
            children: <div>Children</div>
        };
        const layout = shallow(<PageLayout {...defaultProps} />);
        expect(layout.getElement()).toMatchSnapshot();
    });

});
