// Mimics some of the properties and methods of an actual window
// Needed predominantly for tests - easier to initialize with mocks
export interface IWindow {
    innerHeight: number,
    innerWidth: number,

    addEventListener: (event: string, handler: (event: UIEvent) => void) => void
    removeEventListener: (event: string, handler: (event: UIEvent) => void) => void

    matchMedia(mediaQuery: string): MediaQueryList;
}

export interface IWindowDimensions {
    height: number,
    width: number
}