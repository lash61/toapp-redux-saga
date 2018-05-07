import {shallow} from 'enzyme';
import * as React from 'react';

import PageHeader, {IPageHeaderProps} from './PageHeader';

describe('PageHeader', () => {
    it('renders a themed PageHeader component', () => {
        const props: IPageHeaderProps = {
            children: <div>Some text here</div>
        };
        const render = shallow(<PageHeader {...props}/>);
        expect(render.getElement()).toMatchSnapshot();
    });
});
