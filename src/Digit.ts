const LINE_JOINER = '\n';

const ONE_STRING = [
    '   ',
    '  |',
    '  |',
].join(LINE_JOINER);

const TWO_STRING = [
    ' _ ',
    ' _|',
    '|_ ',
].join(LINE_JOINER);

const THREE_STRING = [
    ' _ ',
    ' _|',
    ' _|',
].join(LINE_JOINER);

const FOUR_STRING = [
    '   ',
    '|_|',
    '  |',
].join(LINE_JOINER);

const FIVE_STRING = [
    ' _ ',
    '|_ ',
    ' _|',
].join(LINE_JOINER);

const SIX_STRING = [
    ' _ ',
    '|_ ',
    '|_|',
].join(LINE_JOINER);

const SEVEN_STRING = [
    ' _ ',
    '  |',
    '  |',
].join(LINE_JOINER);

const EIGHT_STRING = [
    ' _ ',
    '|_|',
    '|_|',
].join(LINE_JOINER);

const NINE_STRING = [
    ' _ ',
    '|_|',
    ' _|',
].join(LINE_JOINER);

const ZERO_STRING = [
    ' _ ',
    '| |',
    '|_|',
].join(LINE_JOINER);

const conversions = new Map<string, string>([
    [ONE_STRING, "1"],
    [TWO_STRING, "2"],
    [THREE_STRING, "3"],
    [FOUR_STRING, "4"],
    [FIVE_STRING, "5"],
    [SIX_STRING, "6"],
    [SEVEN_STRING, "7"],
    [EIGHT_STRING, "8"],
    [NINE_STRING, "9"],
    [ZERO_STRING, "0"],
])

const ILLEGIBLE_NUMBER = "?";

export class Digit {
    private constructor(private readonly lines: string[]) {
    }

    static of(lines: string[]): Digit {
        return new Digit(lines);
    }

    toNumber(): string {
        const stringDigit = this.lines.join(LINE_JOINER);
        const conversion = conversions.get(stringDigit);
        if (conversion === undefined) {
            return ILLEGIBLE_NUMBER;
        }
        return conversion;
    }
}