export function isLeapYear(year: number) {
    if (isDivisibleBy(year, 400)) return true;
    if (isDivisibleBy(year, 100)) return false;
    return isDivisibleBy(year, 4);
}

function isDivisibleBy(year: number, divider: number) {
    return year % divider === 0;
}