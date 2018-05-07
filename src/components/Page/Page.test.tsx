import {shallow} from 'enzyme';
import * as React from 'react';

import {IHasTheme} from 'components/Styled/themes';
import Page from './Page';

describe('Page', () => {
    it('renders a themed PageHeader component', () => {
        const props: IHasTheme = {
            children: <div>Some text here</div>
        };
        const render = shallow(<Page {...props}/>);
        expect(render.getElement()).toMatchSnapshot();
    });
});
