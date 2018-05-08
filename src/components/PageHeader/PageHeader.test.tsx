import {shallow} from 'enzyme';
import * as React from 'react';

import {IHasTheme} from 'components/Styled/themes';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
    it('renders a themed PageHeader component', () => {
        const props: IHasTheme = {
            children: <div>Some text here</div>
        };
        const render = shallow(<PageHeader {...props}/>);
        expect(render.getElement()).toMatchSnapshot();

        const diverRender = shallow(<PageHeader {...props}/>).dive();
        expect(diverRender.getElement()).toMatchSnapshot();
    });
});
