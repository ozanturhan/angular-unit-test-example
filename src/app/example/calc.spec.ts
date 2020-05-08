import { calc } from './calc';

describe('calc function test', () => {
  it('should sum two numbers', () => {
    // arrange
    const a = 10;
    const b = 5;

    // act
    const result = calc(a, b);

    // asserts
    expect(result).toEqual(a + b);
  });
});
