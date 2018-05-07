import {AnyAction, combineReducers} from 'redux';

import {defaultTheme, ITheme} from 'components/Styled/themes';
import {ThemeActions} from './themeActions';

export const theme = (state: ITheme = defaultTheme, action: AnyAction) => {
    if (action.type === ThemeActions.THEME_UPDATED) {
        return action.payload;
    }
    return state;
};

export default combineReducers({
    theme
});
