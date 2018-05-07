import {shallow} from 'enzyme';
import * as React from 'react';

import PageTitle, {IPageTitleProps} from './PageTitle';

describe('PageTitle', () => {
    it('renders a themed PageTitle component', () => {
        const props: IPageTitleProps = {
            children: 'Some text here'
        };
        const render = shallow(<PageTitle {...props}/>);
        expect(render.getElement()).toMatchSnapshot();
    });
});
