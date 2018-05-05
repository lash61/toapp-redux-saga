import {shallow} from 'enzyme';
import * as React from 'react';

import {default as TodosList, IProps} from './TodosList';

import {TodoStatus} from 'domains/todos/todosTypes';

import TodoCard from 'components/TodoCard/TodoCard';

describe('TogoList', () => {

    let defaultProps: IProps;
    beforeEach(() => {
        defaultProps = {
            todos: [{
                goal: 'First goal description',
                id: 'first-id',
                status: TodoStatus.COMPLETE,
                steps: [],
                title: 'First todo title'
            }, {
                goal: 'Second goal description',
                id: 'second-id',
                status: TodoStatus.COMPLETE,
                steps: [],
                title: 'Second todo title'
            }]
        }
    });

    it('renders a component', () => {
        const render = shallow(<TodosList {...defaultProps} />);
        expect(render.find(TodoCard).length).toBe(2);
        expect(render.getElement()).toMatchSnapshot();
    });

});