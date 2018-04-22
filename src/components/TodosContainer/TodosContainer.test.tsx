import {shallow} from 'enzyme';
import * as React from 'react';

import {LoadingStates} from 'domains/loadingStates';
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
            loadingState: LoadingStates.COMPLETE,
            todos: todosArray
        };
        const component = shallow(<TodosContainer {...props} />);
        expect(component.getElement()).toMatchSnapshot();
    });

});