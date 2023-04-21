const { calculateMean, calculateMedian, calculateMode } = require('./yourFile.js');

describe('calculateMean', () => {
  it('should calculate the mean of an array of numbers', () => {
    const numList = [1, 2, 3, 4, 5];
    const expectedMean = 3;
    expect(calculateMean(numList)).toEqual(expectedMean);
  });

  it('should handle an empty array', () => {
    const numList = [];
    const expectedMean = NaN;
    expect(calculateMean(numList)).toEqual(expectedMean);
  });
});

describe('calculateMedian', () => {
  it('should calculate the median of an array of numbers', () => {
    const numList = [1, 3, 2, 4, 5];
    const expectedMedian = 3;
    expect(calculateMedian(numList)).toEqual(expectedMedian);
  });

  it('should handle an even number of elements', () => {
    const numList = [1, 2, 3, 4];
    const expectedMedian = 2.5;
    expect(calculateMedian(numList)).toEqual(expectedMedian);
  });

  it('should handle an empty array', () => {
    const numList = [];
    const expectedMedian = NaN;
    expect(calculateMedian(numList)).toEqual(expectedMedian);
  });
});

describe('calculateMode', () => {
  it('should calculate the mode of an array of numbers', () => {
    const numList = [1, 3, 2, 4, 3];
    const expectedMode = { value1: 3 };
    expect(calculateMode(numList)).toEqual(expectedMode);
  });

  it('should handle an empty array', () => {
    const numList = [];
    const expectedMode = {};
    expect(calculateMode(numList)).toEqual(expectedMode);
  });

  it('should handle multiple modes', () => {
    const numList = [1, 3, 2, 4, 3, 2];
    const expectedMode = { value1: 2, value2: 3 };
    expect(calculateMode(numList)).toEqual(expectedMode);
  });
});
