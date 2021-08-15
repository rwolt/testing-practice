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

it('Subtract two positive integers', () => {
    expect(calculator.subtract(3,2)).toBe(1);
});

it('Pass only one parameter to subtract function', () => {
    expect(calculator.subtract(1)).toBe(NaN);
});

it('Subtract a positive and a negative integer', () => {
    expect(calculator.subtract(-1,2)).toBe(-3);
});

it('Subtract two negative integers', () => {
    expect(calculator.subtract(-1,-2)).toBe(1);
});

it('Subtract two floats', () => {
    expect(calculator.subtract(0.34, 0.955)).toBe(-0.615)
})

it('Multiply two positive integers', () => {
    expect(calculator.multiply(3,2)).toBe(6);
});

it('Pass only one parameter to multiply function', () => {
    expect(calculator.multiply(1)).toBe(NaN);
});

it('Multiply a positive and a negative integer', () => {
    expect(calculator.multiply(-1,2)).toBe(-2);
});

it('Multiply two negative integers', () => {
    expect(calculator.multiply(-1,-2)).toBe(2);
});

it('Multiply two floats', () => {
    expect(calculator.multiply(0.34, 0.955)).toBe(0.3247)
})

it('Divide two positive integers', () => {
    expect(calculator.divide(4,2)).toBe(2);
});

it('Pass only one parameter to divide function', () => {
    expect(calculator.divide(1)).toBe(NaN);
});

it('Divide a positive and a negative integer', () => {
    expect(calculator.divide(-6,2)).toBe(-3);
});

it('Divide two negative integers', () => {
    expect(calculator.divide(-6,-2)).toBe(3);
});

it('Divide two floats', () => {
    expect(calculator.divide(0.34, 0.955)).toBeCloseTo(0.356020942)
})
