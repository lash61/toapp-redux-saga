import {media, rem} from './utils';

describe('rem', () => {
    it('converts the passed down px value to rems', () => {
        expect(rem(0)).toBe('0rem');
        expect(rem(16)).toBe('1rem');
        expect(rem(24)).toBe('1.5rem');
    });
});

describe('media', () => {
    it('wraps the passed css with a mobile media type', () => {
        const wrapped = media.mobile`font-size: 12px;`;
        expect(wrapped.toString()).toBe(
            '@media ,only screen and (max-width: 600px), { ,font-size: 12px;, }'
        );
    });
    it('wraps the passed css with a tablet media type', () => {
        const wrapped = media.tablet`font-size: 16px;`;
        expect(`${ wrapped }`).toBe(
            '@media ,only screen and (min-width: 601px) and (max-width: 1023px), { ,font-size: 16px;, }'
        );
    });
    it('wraps the passed css with a desktop media type', () => {
        const wrapped = media.desktop`font-size: 20px;`;
        expect(`${ wrapped }`).toBe(
            '@media ,only screen and (min-width: 1024px), { ,font-size: 20px;, }'
        );
    });
});