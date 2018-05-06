import {AnyAction, combineReducers} from 'redux';

import {WindowActions} from './windowActions';
import {IWindowDimensions} from './windowTypes';

import {MediaType} from 'components/Styled/utils';

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

export const mediaType = (state: MediaType = MediaType.MOBILE, action: AnyAction) => {
    if (action.type === WindowActions.MEDIA_TYPE_UPDATED) {
        return action.payload;
    }
    return state;
};

export default combineReducers({
    mediaType,
    windowDimensions
});

