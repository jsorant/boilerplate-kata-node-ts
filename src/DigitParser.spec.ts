import {describe, expect, it} from "vitest";
import {DigitParser} from "./DigitParser";

describe("DigitParser", () => {
    const ONE_STRING = [
        '   ',
        '  |',
        '  |',
    ];

    const TWO_STRING = [
        ' _ ',
        ' _|',
        '|_ ',
    ];

    const THREE_STRING = [
        ' _ ',
        ' _|',
        ' _|',
    ];

    const FOUR_STRING = [
        '   ',
        '|_|',
        '  |',
    ];

    const FIVE_STRING = [
        ' _ ',
        '|_ ',
        ' _|',
    ];

    const SIX_STRING = [
        ' _ ',
        '|_ ',
        '|_|',
    ];

    const SEVEN_STRING = [
        ' _ ',
        '  |',
        '  |',
    ];

    const EIGHT_STRING = [
        ' _ ',
        '|_|',
        '|_|',
    ];

    const NINE_STRING = [
        ' _ ',
        '|_|',
        ' _|',
    ];

    const ZERO_STRING = [
        ' _ ',
        '| |',
        '|_|',
    ];

    [
        {input: ONE_STRING, expected: "1"},
        {input: TWO_STRING, expected: "2"},
        {input: THREE_STRING, expected: "3"},
        {input: FOUR_STRING, expected: "4"},
        {input: FIVE_STRING, expected: "5"},
        {input: SIX_STRING, expected: "6"},
        {input: SEVEN_STRING, expected: "7"},
        {input: EIGHT_STRING, expected: "8"},
        {input: NINE_STRING, expected: "9"},
        {input: ZERO_STRING, expected: "0"},
    ].forEach(testcase => {
        it(`should parse ${testcase.expected}`, () => {
            expect(DigitParser.toNumber(testcase.input)).toBe(testcase.expected);
        });
    })

    it(`should throw on incorrect input`, () => {
        const input = [
            ' _ ',
            '| |',
            ' _|',
        ];

        expect(() => DigitParser.toNumber(input))
            .toThrowError(`input is not a number:\n${input.join("\n")}`);
    });
});
