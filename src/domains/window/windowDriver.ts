import {debounce} from 'lodash';
import {Store} from 'redux';

import {IAppState} from 'domains/types';
import windowActions from './windowActions';
import {IWindow, IWindowDimensions} from './windowTypes';

interface IDriver {
    start: () => void,
    stop: () => void
}

export const createDriver = (window: IWindow, store: Store<IAppState>): IDriver => {

    const resizeHandler = () => {
        const payload: IWindowDimensions = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        store.dispatch(windowActions.windowDimensionsUpdated(payload));
    };

    const resizeHandlerDebounced = debounce(resizeHandler, 60);

    return {
        start: () => {
            resizeHandler();
            window.addEventListener('resize', resizeHandlerDebounced);
        },
        stop: () => {
            window.removeEventListener('resize', resizeHandlerDebounced);
        }
    };

};



