import {combineReducers} from 'redux';
import {getType} from 'typesafe-actions';

import windowActions from './windowActions';
import {IWindowDimensions} from './windowTypes';

import {MediaType} from 'components/Styled/utils';
import {AppAction} from 'domains/rootReducer';

const defaultWindowDimensions: IWindowDimensions = {
    height: 0,
    width: 0
};

export const windowDimensions = (state: IWindowDimensions = defaultWindowDimensions, action: AppAction) => {
    if (action.type === getType(windowActions.windowDimensionsUpdated)) {
        return action.payload;
    }
    return state;
};

export const mediaType = (state: MediaType = MediaType.MOBILE, action: AppAction) => {
    if (action.type === getType(windowActions.mediaTypeUpdated)) {
        return action.payload;
    }
    return state;
};

export default combineReducers({
    mediaType,
    windowDimensions
});

