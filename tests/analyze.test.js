import { expect, it } from '@jest/globals';
import analyze from '../functions/analyze'


it('All 1s', () => {
    expect(analyze([1,1,1,1,1,1])).toMatchObject( {
      average: 1,
      min: 1,
      max: 1,
      length: 6
    })
});

it('Average is an integer', () => {
  expect(analyze([1,3,1,3,1,3])).toMatchObject( {
    average: 2,
    min: 1,
    max: 3,
    length: 6
  })
});

it('Average is a float', () => {
  expect(analyze([1,3,1,3,1,3,7,9,2,11])).toMatchObject( {
    average: 4.1,
    min: 1,
    max: 11,
    length: 10
  })
});

it('Array contains floats', () => {
  expect(analyze([4.56, 3.14159, 5, 99.9])).toMatchObject( {
    average: 28.1503975,
    min: 4.56,
    max: 99.9,
    length: 4
  })
});

it('Length of 0', () => {
  expect(analyze([])).toMatchObject( {
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0
  })
});