import {Decoder} from 'io-ts';
import {PathReporter} from 'io-ts/lib/PathReporter';

export const decodeFactory = (loggingFunction: (message?: any, ...optionalParams: any[]) => void) => {
    return <T>(decoder: Decoder<T, T>) => (json: any): T => {
        const decodeResult = decoder.decode(json);
        if (!decodeResult.isRight()) {
            loggingFunction('Api Validation', PathReporter.report(decodeResult));
        }
        return json;
    };
};

export const decode = decodeFactory(console.log);