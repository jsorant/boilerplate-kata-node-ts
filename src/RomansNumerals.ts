export class RomansNumerals {
  conversions = [
    { numeral: 1000, roman: "M" },
    { numeral: 900, roman: "CM" },
    { numeral: 500, roman: "D" },
    { numeral: 400, roman: "CD" },
    { numeral: 100, roman: "C" },
    { numeral: 90, roman: "XC" },
    { numeral: 50, roman: "L" },
    { numeral: 40, roman: "XL" },
    { numeral: 10, roman: "X" },
    { numeral: 9, roman: "IX" },
    { numeral: 5, roman: "V" },
    { numeral: 4, roman: "IV" },
    { numeral: 1, roman: "I" },
  ];

  toRoman(numeral: number): string {
    let remainingNumeral = numeral;
    let result = "";

    this.conversions.forEach((conversion) => {
      while (remainingNumeral >= conversion.numeral) {
        result += conversion.roman;
        remainingNumeral -= conversion.numeral;
      }
    });

    return result;
  }
}
