import { expect, it } from '@jest/globals';
import capitalize from '../functions/capitalize.js';

it('Lower case string', () => {
    expect(capitalize('lowercase')).toBe('Lowercase');
});

it('Capitalized string', () => {
    expect(capitalize('Capitalized')).toBe('Capitalized');
})

it('Upper case string', () => {
    expect(capitalize('UPPERCASE')).toBe('UPPERCASE');
})

it('Multiple word string', () => {
    expect(capitalize('lower case')).toBe('Lower case');
})

it('Special character at beginning of string', () => {
    expect(capitalize('$uper')).toBe('$uper');
})
