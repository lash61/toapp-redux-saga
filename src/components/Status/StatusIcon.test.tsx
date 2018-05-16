import {shallow} from 'enzyme';
import * as React from 'react';

import {TodoStatus} from 'domains/todos/todosTypes';
import StatusIcon from './StatusIcon';

describe('StatusIcon', () => {
    it('renders a component', () => {
        const props = {
            status: TodoStatus.COMPLETE,
            onClick: jest.fn()
        };
        expect(shallow(<StatusIcon {...props} />).getElement()).toMatchSnapshot();
    });
});
