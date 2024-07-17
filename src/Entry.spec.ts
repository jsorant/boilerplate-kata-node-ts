import {describe, expect, it} from "vitest";
import {AccountNumber} from "./AccountNumber";
import {Entry} from "./Entry";

describe("Entry", () => {
    describe("with valid lines", () => {
        [{
            entryLines: [
                '    _  _     _  _  _  _  _ ',
                '  | _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
                '',
            ],
            expectedAccountNumber: "123456789"
        }, {
            entryLines: [
                ' _  _  _     _  _  _  _  _ ',
                '  | _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
                '',
            ],
            expectedAccountNumber: "723456789"
        }].forEach(testcase => {
            it(`should parse ${testcase.expectedAccountNumber}`, () => {
                expect(Entry.of(testcase.entryLines).toAccountNumber())
                    .toStrictEqual(AccountNumber.of(testcase.expectedAccountNumber));
            });
        })
    });

    describe("with invalid lines count", () => {
        [{
            entryLines: [
                '    _  _     _  _  _  _  _ ',
                '  | _| _||_||_ |_   ||_||_|',
            ],
            expectedError: "Invalid lines count, expected: 4, received: 2"
        }, {
            entryLines: [
                '    _  _     _  _  _  _  _ ',
                '  | _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
            ],
            expectedError: "Invalid lines count, expected: 4, received: 3"
        }, {
            entryLines: [
                '    _  _     _  _  _  _  _ ',
                '  | _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
                '',
                '    _  _     _  _  _  _  _ ',
            ],
            expectedError: "Invalid lines count, expected: 4, received: 5"
        }].forEach(testcase => {
            it(`should not parse an entry of ${testcase.entryLines.length} lines`, () => {
                expect(() => Entry.of(testcase.entryLines).toAccountNumber())
                    .toThrowError(testcase.expectedError);
            });
        })
    });

    describe("with invalid lines length", () => {
        [{
            entryLines: [
                '    _  _     _  _  _  _  _',
                '  | _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
                '',
            ],
            expectedError: "Invalid line length, expected: 27, received: 26",
            incorrectLength: 26
        }, {
            entryLines: [
                '    _  _     _  _  _  _  _ ',
                ' | _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
                '',
            ],
            expectedError: "Invalid line length, expected: 27, received: 26",
            incorrectLength: 26
        }, {
            entryLines: [
                '    _  _     _  _  _  _  _ ',
                '| _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
                '',
            ],
            expectedError: "Invalid line length, expected: 27, received: 25",
            incorrectLength: 25
        }, {
            entryLines: [
                '    _  _     _  _  _  _  _ ',
                '   | _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
                '',
            ],
            expectedError: "Invalid line length, expected: 27, received: 28",
            incorrectLength: 28
        }].forEach(testcase => {
            it(`should not parse an entry that have a line of length: ${testcase.incorrectLength}`, () => {
                expect(() => Entry.of(testcase.entryLines).toAccountNumber())
                    .toThrowError(testcase.expectedError);
            });
        });

        [{
            entryLines: [
                '    _  _     _  _  _  _  _ ',
                '  | _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
                ' ',
            ],
            expectedError: "Fourth line of the entry must be an empty line, found: ' '",
        }, {
            entryLines: [
                '    _  _     _  _  _  _  _ ',
                '  | _| _||_||_ |_   ||_||_|',
                '  ||_  _|  | _||_|  ||_| _|',
                '-',
            ],
            expectedError: "Fourth line of the entry must be an empty line, found: '-'",
        }].forEach(testcase => {
            it(`should not parse an entry that have an invalid last line: '${testcase.entryLines.at(3)}'`, () => {
                expect(() => Entry.of(testcase.entryLines).toAccountNumber())
                    .toThrowError(testcase.expectedError);
            });
        })
    });
});