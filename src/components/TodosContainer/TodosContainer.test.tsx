import {shallow} from 'enzyme';
import * as React from 'react';

import {ITodo, TodoStatus} from 'domains/types';
import {TodosContainer} from './TodosContainer';

describe('TodosContainer', () => {

    it('renders a component', () => {
        const todosArray: ITodo[] = [{
            goal: 'Goal',
            id: 'some-id',
            status: TodoStatus.NOT_STARTED,
            steps: [],
            title: 'Title'
        }];

        const props = {
            loadTodos: jest.fn(),
            todos: todosArray
        };
        const component = shallow(<TodosContainer {...props} />);
        expect(component.getElement()).toMatchSnapshot();
    });

});