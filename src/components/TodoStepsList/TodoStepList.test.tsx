import {shallow} from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';

import TodoStepList, {IProps} from './TodoStepList';

describe('TodoStepList', () => {

    let defaultProps: IProps;
    beforeEach(() => {
        defaultProps = {
            steps: [{
                details: 'Step details',
                id: 'todo-3-step-1',
                title: 'Step tile'
            }],
            dataRole: 'todo-card-step-list-0'
        }
    });

    it('renders a component', () => {
        const render = shallow(<TodoStepList {...defaultProps} />);
        expect(render.getElement()).toMatchSnapshot();
    });

});
