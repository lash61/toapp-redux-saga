import {MediaType} from 'components/Styled/utils';
import {initAction} from 'domains/rootReducer';

import windowActions from './windowActions';
import {mediaType, windowDimensions} from './windowReducer';
import {IWindowDimensions} from './windowTypes';


describe('windowDimensions', () => {

    it('has default state', () => {
        const newState = windowDimensions(undefined, initAction());
        expect(newState).toEqual({height: 0, width: 0});
    });

    it('updates the state on WINDOW_DIMENSIONS_UPDATED', () => {
        const currentState: IWindowDimensions = {height: 0, width: 0};
        const dimensions: IWindowDimensions = {height: 768, width: 1024};
        const newState = windowDimensions(currentState, windowActions.windowDimensionsUpdated(dimensions));
        expect(newState).toEqual(dimensions);
    });

});

describe('mediaType', () => {

    it('has default state', () => {
        const newState = mediaType(undefined, initAction());
        expect(newState).toEqual(MediaType.MOBILE);
    });

    it('updates the state on MEDIA_TYPE_UPDATED', () => {
        const action = windowActions.mediaTypeUpdated(MediaType.TABLET);
        const newState = mediaType(MediaType.MOBILE, action);
        expect(newState).toEqual(MediaType.TABLET);
    });

});
