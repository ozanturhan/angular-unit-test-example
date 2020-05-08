import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should sum two numbers', () => {
    // arrange
    const a = 10;
    const b = 5;

    // act
    calculator.sum(a, b);

    // asserts
    expect(calculator.getResult()).toEqual(a + b);
  });

  it('should sum two numbers', () => {
    // arrange
    const a = 2;
    const b = 5;

    // act
    calculator.multiply(a, b);

    // asserts
    expect(calculator.getResult()).toEqual(10);
  });
});
