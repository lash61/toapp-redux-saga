import * as t from 'io-ts';
import {decodeFactory} from './apiValidation';

describe('api types validation', () => {
    const FakeType = t.type({
        key: t.number
    });

    it('executes logger function if the passed down object does not match the type', () => {
        const loggingFn = jest.fn();
        const decode = decodeFactory(loggingFn);
        const validatedObject = {key: '0'};

        const res = decode(FakeType)(validatedObject);

        expect(loggingFn).toBeCalled();
        expect(res).toBe(validatedObject);
    });

    it('does not execute the logger function if the object matches type type', () => {
        const loggingFn = jest.fn();
        const decode = decodeFactory(loggingFn);
        const validatedObject = {key: 0};

        const res = decode(FakeType)(validatedObject);

        expect(loggingFn).not.toBeCalled();
        expect(res).toBe(validatedObject);
    });
});