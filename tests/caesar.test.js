import { expect, it } from '@jest/globals';
import caesar from '../functions/caesar';

it('Lower case string', () => {
    expect(caesar('coffee', 3)).toBe('friihh')
});

it('Upper case character', () => {
    expect(caesar('Toto', 5)).toBe('Ytyt')
});

it('Wrapping z to a', () => {
    expect(caesar('tokyo', 5)).toBe('ytpdt')
});

it('Wrapping Z to A', () => {
    expect(caesar('JAZZFLUTE', 6)).toBe('PGFFLRAZK')
});

it('Space character', () => {
    expect(caesar('JAZZ FLUTE', 6)).toBe('PGFF LRAZK')
});

it('Special Characters', () => {
    expect(caesar('/practice$', 3)).toBe('/sudfwlfh$')
});

it('Key is greater than 26', () => {
    expect(caesar('jest', 188)).toBe('pkyz')
});