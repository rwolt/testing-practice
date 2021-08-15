import { expect, it } from '@jest/globals'
import calculator from '../functions/calculator'

it('Add two positive integers', () => {
    expect(calculator.add(1,2)).toBe(3);
});

it('Pass only one parameter to add function', () => {
    expect(calculator.add(1)).toBe(NaN);
});

it('Add a positive and a negative integer', () => {
    expect(calculator.add(-1,2)).toBe(1);
});

it('Add two negative integers', () => {
    expect(calculator.add(-1,-2)).toBe(-3);
});

it('Add two floats', () => {
    expect(calculator.add(0.34, 0.955)).toBe(1.295)
})