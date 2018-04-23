import {rem} from './utils';

describe('rem', () => {
    it('converts the passed down px value to rems', () => {
        expect(rem(0)).toBe('0rem');
        expect(rem(16)).toBe('1rem');
        expect(rem(24)).toBe('1.5rem');
    });
});