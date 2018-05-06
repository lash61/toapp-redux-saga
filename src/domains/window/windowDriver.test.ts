import {Store} from 'redux';

import {IAppState} from 'domains/types';

import windowActions from './windowActions';
import {createDriver} from './windowDriver';
import {IWindow} from './windowTypes';

describe('windowDriver', () => {

    let window: IWindow;
    let store: Store<IAppState>;
    let windowListeners: Array<(event: UIEvent) => void>;
    let mediaQueryListeners: MediaQueryList[];
    beforeEach(() => {
        windowListeners = [];
        mediaQueryListeners = [];
        window = {
            innerHeight: 768,
            innerWidth: 1024,

            addEventListener: jest.fn((fn) => {
                windowListeners.push(fn)
            }),
            removeEventListener: jest.fn((fn) => {
                const index = windowListeners.indexOf(fn);
                if (index > -1) {
                    windowListeners.splice(index, 1);
                }
            }),

            matchMedia: jest.fn(() => {
                return {
                    addListener: jest.fn((mql: MediaQueryList) => {
                        mediaQueryListeners.push(mql);
                    }),
                    removeListener: jest.fn((mql: MediaQueryList) => {
                        const index = mediaQueryListeners.indexOf(mql);
                        if (index > -1) {
                            mediaQueryListeners.splice(index, 1);
                        }
                    })
                }
            })
        };

        store = {
            dispatch: jest.fn(),
            getState: jest.fn(),
            replaceReducer: jest.fn(),
            subscribe: jest.fn()
        };
    });

    it('dispatches an action with initial dimensions on driver.start()', () => {
        const driver = createDriver(window, store);
        driver.start();

        const initialDimensions = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        expect(store.dispatch).toHaveBeenCalledWith(
            windowActions.windowDimensionsUpdated(initialDimensions)
        );
    });

    it('adds an event listener to window on driver.start() and removes it on driver.stop()', () => {
        const driver = createDriver(window, store);
        driver.start();
        expect(window.addEventListener).toHaveBeenCalled();
        expect(windowListeners.length).toBe(1);

        driver.stop();
        expect(window.removeEventListener).toHaveBeenCalled();
        expect(windowListeners.length).toBe(0);
    });

    it('adds media query listeners on driver.start() and removes them on driver.stop()', () => {
        const driver = createDriver(window, store);
        driver.start();
        expect(mediaQueryListeners.length).toBe(3);

        driver.stop();
        expect(mediaQueryListeners.length).toBe(0);
    });

});
