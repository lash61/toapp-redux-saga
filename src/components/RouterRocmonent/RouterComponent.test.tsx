import {shallow} from 'enzyme';
import {History} from 'history';
import * as React from 'react';

import RouterComponent, {IProps} from './RouterComponent';

describe('RouterComponent', () => {

    it('renders a component', () => {
        const defaultProps: IProps = {
            history: {} as History
        };

        const router = shallow(<RouterComponent {...defaultProps} />);
        expect(router.getElement()).toMatchSnapshot();
    });

});
