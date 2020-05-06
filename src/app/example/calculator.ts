export class Calculator {
  private result: number;

  sum(a: number, b: number) {
    this.result = a + b;
  }

  multiply(a: number, b: number) {
    this.result = a * b;
  }

  getResult(): number {
    return this.result;
  }
}
