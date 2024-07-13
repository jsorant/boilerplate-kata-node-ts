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

export class DigitParser {
    static toNumber(input: string[]): string {
        const stringDigit = input.join(LINE_JOINER);
        const conversion = conversions.get(stringDigit);
        if (conversion === undefined) {
            throw new Error(`input is not a number:\n${stringDigit}`);
        }
        return conversion;
    }
}