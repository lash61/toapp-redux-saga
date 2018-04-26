import {shallow} from 'enzyme';
import * as React from 'react';

import {TodoStatus} from 'domains/types';

import TodoStepList from 'components/TodoStepsList/TodoStepList';
import {Goal, IProps, Status, TodoCard} from './TodoCard';

describe('TodoCard', () => {

    let defaultProps: IProps;
    beforeEach(() => {
        defaultProps = {
            selectTodo: jest.fn(),
            selectedTodoId: '',
            todo: {
                goal: 'Goal description',
                id: 'some-id',
                status: TodoStatus.COMPLETE,
                steps: [],
                title: 'Todo title'
            },
            updateTodoStatus: jest.fn()
        }
    });

    it('renders a component with non-expanded TodoStepList', () => {
        const render = shallow(<TodoCard {...defaultProps} />);
        expect(render.find(TodoStepList).exists()).toBe(false);
        expect(render.getElement()).toMatchSnapshot();
    });

    it('renders a component with expanded TodoStepList', () => {
        defaultProps.selectedTodoId = 'some-id';

        const render = shallow(<TodoCard {...defaultProps} />);
        expect(render.find(TodoStepList).exists()).toBe(true);
        expect(render.getElement()).toMatchSnapshot();
    });

    it('executes selectTodo if user clicks on Goal', () => {
        const render = shallow(<TodoCard {...defaultProps} />);
        const goalComponent = render.find(Goal);
        goalComponent.simulate('click');
        expect(defaultProps.selectTodo).toHaveBeenCalledWith('some-id');
    });

    it('executes updateTodoStatus if user clicks on Status', () => {
        const render = shallow(<TodoCard {...defaultProps} />);
        const statusComponent = render.find(Status);
        statusComponent.simulate('click');
        expect(defaultProps.updateTodoStatus).toHaveBeenCalledWith('some-id');
    });

});