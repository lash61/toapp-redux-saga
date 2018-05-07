import {shallow} from 'enzyme';
import * as React from 'react';

import {defaultTheme, Theme} from 'components/Styled/themes';
import ThemeSelector, {IProps, Selector} from './ThemeSelector';

describe('ThemeSelector', () => {

    it('renders a component', () => {
        const props: IProps = {
            changeTheme: jest.fn()
        };
        const render = shallow(<ThemeSelector {...props}/>);
        expect(render.getElement()).toMatchSnapshot();
    });

});

describe('Selector', () => {

    let props: IProps;
    beforeEach(() => {
        props = {
            changeTheme: jest.fn(),
            theme: defaultTheme
        };
    });

    it('renders a component', () => {
        const render = shallow(<Selector {...props}/>);
        expect(render.getElement()).toMatchSnapshot();
    });

    it('calls changeTheme on change', () => {
        const render = shallow(<Selector {...props}/>);

        const selectElement = render.find('select');
        const event = {
            target: {
                value: Theme.LIGHT_THEME
            }
        };
        selectElement.simulate('change', event);

        expect(props.changeTheme).toHaveBeenCalledWith(defaultTheme);
    });

});