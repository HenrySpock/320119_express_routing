const express = require('express');
const { calculateMean, calculateMedian, calculateMode } = require('./stats');
const app = express();
const server = require('./stats');

// Unit tests
describe('calculateMean function', () => { 

  test('calculates the mean of an array of numbers', () => {
    const numList = [1, 2, 3, 4];
    expect(calculateMean(numList)).toEqual(2.5);
  });

  test('returns NaN if the input is not an array of numbers', () => {
    const numList = [1, 'foo', 3, 4];
    expect(calculateMean(numList)).toBeNaN();
  });
});

describe('calculateMedian function', () => {
  test('calculates the median of an array of odd length', () => {
    const numList = [1, 2, 3, 4, 5];
    expect(calculateMedian(numList)).toEqual(3);
  });

  test('calculates the median of an array of even length', () => {
    const numList = [1, 2, 3, 4];
    expect(calculateMedian(numList)).toEqual(2.5);
  });

  test('returns NaN if the input is not an array of numbers', () => {
    const numList = [1, 'foo', 3, 4];
    expect(calculateMedian(numList)).toBeNaN();
  });
});

describe('calculateMode function', () => {
  test('calculates the mode of an array with one mode', () => {
    const numList = [1, 2, 2, 3, 4];
    expect(calculateMode(numList)).toEqual({ value1: 2 });
  });

  test('calculates the mode of an array with multiple modes', () => {
    const numList = [1, 2, 2, 3, 3, 4];
    expect(calculateMode(numList)).toEqual({ value1: 2, value2: 3 });
  });

  test('returns an empty object if there is no mode', () => {
    const numList = [1, 2, 3, 4];
    expect(calculateMode(numList)).toEqual({});
  });

  test('returns NaN if the input is not an array of numbers', () => {
    const numList = [1, 'foo', 3, 4];
    expect(calculateMode(numList)).toBeNaN();
  });
}); 