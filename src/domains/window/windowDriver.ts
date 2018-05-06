import {debounce} from 'lodash';
import {Store} from 'redux';

import {MediaType} from 'components/Styled/utils';
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

    const mediaQueryListener = (mql: MediaQueryList) => {
        if (mql.matches) {
            store.dispatch(windowActions.mediaTypeUpdated(mql.media));
        }
    };

    const mobileMQL = window.matchMedia(MediaType.MOBILE);
    const tabletMQL = window.matchMedia(MediaType.TABLET);
    const desktopMQL = window.matchMedia(MediaType.DESKTOP);

    return {
        start: () => {
            resizeHandler();
            mediaQueryListener(mobileMQL);
            mediaQueryListener(tabletMQL);
            mediaQueryListener(desktopMQL);

            window.addEventListener('resize', resizeHandlerDebounced);

            mobileMQL.addListener(mediaQueryListener);
            tabletMQL.addListener(mediaQueryListener);
            desktopMQL.addListener(mediaQueryListener);
        },
        stop: () => {
            window.removeEventListener('resize', resizeHandlerDebounced);

            mobileMQL.removeListener(mediaQueryListener);
            tabletMQL.removeListener(mediaQueryListener);
            desktopMQL.removeListener(mediaQueryListener);
        }
    };

};



