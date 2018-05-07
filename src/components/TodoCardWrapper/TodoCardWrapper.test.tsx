import {shallow} from 'enzyme';
import * as React from 'react';

import {IHasTheme} from 'components/Styled/themes';
import TodoCardWrapper from './TodoCardWrapper';

describe('PageHeader', () => {
    it('renders a themed PageHeader component', () => {
        const props: IHasTheme = {
            children: <div>Some text here</div>
        };
        const render = shallow(<TodoCardWrapper {...props}/>);
        expect(render.getElement()).toMatchSnapshot();
    });
});
