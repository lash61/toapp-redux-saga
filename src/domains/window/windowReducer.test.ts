import windowActions from './windowActions';
import {windowDimensions} from './windowReducer';
import {IWindowDimensions} from './windowTypes';


describe('windowDimensions', () => {

    it('has default state', () => {
        const newState = windowDimensions(undefined, {type: 'some-action'});
        expect(newState).toEqual({height: 0, width: 0});
    });

    it('updates the state on ', () => {
        const currentState: IWindowDimensions = {height: 0, width: 0};
        const dimensions: IWindowDimensions = {height: 768, width: 1024};
        const newState = windowDimensions(currentState, windowActions.windowDimensionsUpdated(dimensions));
        expect(newState).toEqual(dimensions);
    });

});