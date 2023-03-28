import { expect } from "chai";

describe("Calculator", () => {
  it("should return 3 when adding 1 and 2", () => {
    const calculator = new Calculator();
    const result = calculator.add(1, 2);
    expect(result).to.equal(3);
  });
});

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
