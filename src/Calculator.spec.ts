import { expect, test, describe } from "vitest";
import { fizzbuzz } from "./fizzbuzz";

// FizzBuzz : pour un nombre n
// - si n est multiple de 3, retourner 'fizz'
// - si n est multiple de 5, retourner 'buzz'
// - si n est multiple de 3 et 5, retourner 'fizzbuzz'
// - sinon retourner le n sous forme de string

describe("FizzBuzz", () => {
  describe("Default cases", () => {
    const testCases = [
      { input: 1, expectedOutput: "1" },
      { input: 2, expectedOutput: "2" },
      { input: 4, expectedOutput: "4" },
    ];

    testCases.forEach((testCase) => {
      test(`should return '${testCase.expectedOutput}' for ${testCase.input}`, () => {
        expect(fizzbuzz(testCase.input)).toBe(testCase.expectedOutput);
      });
    });
  });

  describe("Fizz cases", () => {
    const inputs = [3, 6, 9];

    inputs.forEach((input) => {
      test(`should return 'fizz' for ${input}`, () => {
        expect(fizzbuzz(input)).toBe("fizz");
      });
    });
  });

  describe("Buzz cases", () => {
    const inputs = [5, 10, 20];

    inputs.forEach((input) => {
      test(`should return 'buzz' for ${input}`, () => {
        expect(fizzbuzz(input)).toBe("buzz");
      });
    });
  });

  describe("FizzBuzz cases", () => {
    [15, 30, 45].forEach((input) => {
      test(`should return 'fizzbuzz' for ${input}`, () => {
        expect(fizzbuzz(input)).toBe("fizzbuzz");
      });
    });
  });
});
