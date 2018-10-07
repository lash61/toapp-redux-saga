import {combineReducers} from 'redux';
import {getType} from 'typesafe-actions';

import {defaultTheme, ITheme} from 'components/Styled/themes';
import {AppAction} from 'domains/rootReducer';
import themeActions from './themeActions';

export const theme = (state: ITheme = defaultTheme, action: AppAction) => {
    if (action.type === getType(themeActions.updateTheme)) {
        return action.payload;
    }
    return state;
};

export default combineReducers({
    theme
});
