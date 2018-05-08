import {shallow} from 'enzyme';
import * as React from 'react';

import {IHasTheme} from 'components/Styled/themes';
import PageTitle from './PageTitle';

describe('PageTitle', () => {
    it('renders a themed PageTitle component', () => {
        const props: IHasTheme = {
            children: 'Some text here'
        };
        const render = shallow(<PageTitle {...props}/>);
        expect(render.getElement()).toMatchSnapshot();

        const diveRender = shallow(<PageTitle {...props}/>).dive();
        expect(diveRender.getElement()).toMatchSnapshot();
    });
});
