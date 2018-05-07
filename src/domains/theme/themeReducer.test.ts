import {darkTheme, defaultTheme} from 'components/Styled/themes';

import themeActions from './themeActions';
import {theme} from './themeReducer';

describe('theme', () => {

    it('has a default state', () => {
        const newState = theme(undefined, {type: 'some-action'});
        expect(newState).toEqual(defaultTheme);
    });

    it('updates the state on THEME_UPDATED', () => {
        const action = themeActions.updateTheme(darkTheme);
        const newState = theme(defaultTheme, action);
        expect(newState).toBe(darkTheme)
    });

});
