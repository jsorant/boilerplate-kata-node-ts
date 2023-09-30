import { expect } from "chai";
import { RomansNumerals } from "./RomansNumerals";

describe("Romans numerals", () => {
  [
    { numeral: 1, roman: "I" },
    { numeral: 2, roman: "II" },
    { numeral: 3, roman: "III" },
    { numeral: 10, roman: "X" },
    { numeral: 20, roman: "XX" },
    { numeral: 21, roman: "XXI" },
    { numeral: 5, roman: "V" },
    { numeral: 4, roman: "IV" },
    { numeral: 9, roman: "IX" },
    { numeral: 50, roman: "L" },
    { numeral: 40, roman: "XL" },
    { numeral: 100, roman: "C" },
    { numeral: 90, roman: "XC" },
    { numeral: 500, roman: "D" },
    { numeral: 400, roman: "CD" },
    { numeral: 1000, roman: "M" },
    { numeral: 900, roman: "CM" },
    { numeral: 2478, roman: "MMCDLXXVIII" },
  ].forEach((testCase) => {
    it(`${testCase.numeral}`, () => {
      const romansNumerals = new RomansNumerals();

      const roman = romansNumerals.toRoman(testCase.numeral);

      expect(roman).to.equal(testCase.roman);
    });
  });
});
