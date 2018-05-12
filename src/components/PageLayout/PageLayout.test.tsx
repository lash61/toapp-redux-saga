import {shallow} from 'enzyme';
import * as React from 'react';

import {defaultTheme} from 'components/Styled/themes';

import {IProps, PageLayout} from './PageLayout';

describe('PageLayout', () => {

    it('renders a component', () => {
        const defaultProps: IProps = {
            changeTheme: jest.fn(),
            theme: defaultTheme,
            children: <div>Children</div>
        };
        const layout = shallow(<PageLayout {...defaultProps} />);
        expect(layout.getElement()).toMatchSnapshot();
    });

});
