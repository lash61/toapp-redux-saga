import {shallow} from 'enzyme';
import * as React from 'react';

import {TodoStatus} from 'domains/types';

import TodoCard, {IProps} from './TodoCard';

describe('TodoCard', () => {

    let defaultProps: IProps;
    beforeEach(() => {
        defaultProps = {
            todo: {
                goal: 'Goal description',
                id: 'some-id',
                status: TodoStatus.COMPLETE,
                steps: [],
                title: 'Todo title'
            }
        }
    });

    it('renders a component', () => {
        const render = shallow(<TodoCard {...defaultProps} />);
        expect(render.getElement()).toMatchSnapshot();
    });

});