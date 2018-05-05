import {AnyAction, combineReducers} from 'redux';

import {WindowActions} from './windowActions';
import {IWindowDimensions} from './windowTypes';

const defaultWindowDimensions: IWindowDimensions = {
    height: 0,
    width: 0
};

export const windowDimensions = (state: IWindowDimensions = defaultWindowDimensions, action: AnyAction) => {
    if (action.type === WindowActions.WINDOW_DIMENSIONS_UPDATED) {
        return action.payload;
    }
    return state;
};

export default combineReducers({
    windowDimensions
});

