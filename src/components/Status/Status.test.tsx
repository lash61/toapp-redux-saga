import {shallow} from 'enzyme';
import * as React from 'react';

import {IHasMediaType, MediaType} from 'components/Styled/utils';
import {TodoStatus} from 'domains/todos/todosTypes';

import Status, {ITodoStatusProps} from './Status';
import StatusBadge from './StatusBadge';
import StatusIcon from './StatusIcon';

describe('Status', () => {

    let props: ITodoStatusProps & IHasMediaType;
    beforeEach(() => {
        props = {
            mediaType: MediaType.DESKTOP,
            status: TodoStatus.PENDING,
            onClick: jest.fn()
        };
    });

    it('renders a component for DESKTOP', () => {
        const render = shallow(<Status {...props}/>);

        expect(render.find(StatusBadge).exists()).toBe(true);
        expect(render.getElement()).toMatchSnapshot();
    });

    it('renders a component for MOBILE', () => {
        props.mediaType = MediaType.MOBILE;
        const render = shallow(<Status {...props}/>);
        expect(render.find(StatusIcon).exists()).toBe(true);
        expect(render.getElement()).toMatchSnapshot();
    });

});