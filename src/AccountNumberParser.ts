import {AccountNumber} from "./AccountNumber";
import {DigitParser} from "./DigitParser";

const LINES_COUNT = 4;
const LINES_LENGTH = 27;
const DIGITS_COUNT = 9;
const DIGIT_WIDTH = 3;

export class Entry {
    constructor(private readonly lines: string[]) {
        this.verifyLinesCount();
        this.verifyDigitLinesLength();
        this.verifyLastLineLength();
    }

    toAccountNumber() {
        let accountNumberValue = "";
        for (let digitIndex = 0; digitIndex < DIGITS_COUNT; digitIndex++) {
            const digitLines = this.digitsLines().map(l => l.slice(digitIndex * DIGIT_WIDTH, (digitIndex + 1) * DIGIT_WIDTH));
            accountNumberValue += DigitParser.toNumber(digitLines)
        }

        return AccountNumber.of(accountNumberValue);
    }

    private verifyLinesCount() {
        if (this.lines.length !== LINES_COUNT)
            throw new Error(`Invalid lines count, expected: ${LINES_COUNT}, received: ${(this.lines.length)}`);
    }

    private verifyDigitLinesLength() {
        const found = this.digitsLines().find(line => {
            return line.length !== LINES_LENGTH;
        });
        if (found)
            throw new Error(`Invalid line length, expected: ${LINES_LENGTH}, received: ${found.length}`)
    }

    private verifyLastLineLength() {
        let lastLine = this.lines.at(LINES_COUNT - 1)!;
        if (lastLine.length !== 0)
            throw new Error(`Fourth line of the entry must be an empty line, found: '${lastLine}'`);
    }

    private digitsLines() {
        return this.lines.slice(0, LINES_COUNT - 1);
    }
}