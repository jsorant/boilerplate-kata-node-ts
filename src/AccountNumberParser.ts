import {AccountNumber} from "./AccountNumber";
import {DigitParser} from "./DigitParser";

const LINES_COUNT = 4;
const LINES_LENGTH = 27;
const DIGITS_COUNT = 9;
const DIGIT_WIDTH = 3;

export class AccountNumberParser {
    static toAccountNumber(entryLines: string[]) {
        this.verifyLinesCount(entryLines);
        this.verifyDigitLinesLength(entryLines);
        this.verifyLastLineLength(entryLines);
        return this.parseAccountNumber(entryLines);
    }

    private static verifyLinesCount(lines: string[]) {
        if (lines.length !== LINES_COUNT)
            throw new Error(`Invalid lines count, expected: ${LINES_COUNT}, received: ${(lines.length)}`);
    }

    private static verifyDigitLinesLength(lines: string[]) {
        const found = this.digitsLines(lines).find(line => {
            return line.length !== LINES_LENGTH;
        });
        if (found)
            throw new Error(`Invalid line length, expected: ${LINES_LENGTH}, received: ${found.length}`)
    }

    private static verifyLastLineLength(entryLines: string[]) {
        let lastLine = entryLines.at(LINES_COUNT - 1)!;
        if (lastLine.length !== 0)
            throw new Error(`Fourth line of the entry must be an empty line, found: '${lastLine}'`);
    }

    private static parseAccountNumber(lines: string[]) {
        let accountNumberValue = "";
        for (let digitIndex = 0; digitIndex < DIGITS_COUNT; digitIndex++) {
            const digitLines = this.digitsLines(lines).map(l => l.slice(digitIndex * DIGIT_WIDTH, (digitIndex + 1) * DIGIT_WIDTH));
            accountNumberValue += DigitParser.toNumber(digitLines)
        }
        return AccountNumber.of(accountNumberValue);
    }

    private static digitsLines(lines: string[]) {
        return lines.slice(0, LINES_COUNT - 1);
    }
}