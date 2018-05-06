import {ActionCreator, AnyAction} from 'redux';
import {IWindowDimensions} from './windowTypes';

import {MediaType} from 'components/Styled/utils';

export enum WindowActions {
    WINDOW_DIMENSIONS_UPDATED = 'WINDOW_DIMENSIONS_UPDATED',
    MEDIA_TYPE_UPDATED = 'MEDIA_TYPE_UPDATED'
}

export interface IWindowDimensionsUpdatedAction extends AnyAction {
    payload: IWindowDimensions
}

const windowDimensionsUpdated: ActionCreator<IWindowDimensionsUpdatedAction> = (dimensions: IWindowDimensions) => {
    return {
        payload: dimensions,
        type: WindowActions.WINDOW_DIMENSIONS_UPDATED
    }
};

export interface IMediaUpdatedAction extends AnyAction {
    payload: MediaType
}

const mediaTypeUpdated: ActionCreator<IMediaUpdatedAction> = (mediaType: MediaType) => {
    return {
        payload: mediaType,
        type: WindowActions.MEDIA_TYPE_UPDATED
    }
};

export default {
    mediaTypeUpdated,
    windowDimensionsUpdated
}