import {describe, expect, it} from "vitest";
import {isLeapYear} from "./IsLeapYear";

describe("Leap Years", () => {
    describe("All years divisible by 400 ARE leap years (so, for example, 2000 was indeed a leap year)", () => {
        it("should be true for 2000", () => {
            expect(isLeapYear(2000)).toBe(true);
        });
    })

    describe("All years divisible by 100 but not by 400 are NOT leap years (so, for example, 1700, 1800, and 1900 were NOT leap years, NOR will 2100 be a leap year)", () => {
        [1700, 1800, 1900, 2100].forEach(year => {
            it(`should be true for ${year}`, () => {
                expect(isLeapYear(year)).toBe(false);
            });
        })
    })

    describe("All years divisible by 4 but not by 100 ARE leap years (e.g., 2008, 2012, 2016)", () => {
        it("should be true for 2008", () => {
            expect(isLeapYear(2008)).toBe(true);
        });

        it("should be true for 2012", () => {
            expect(isLeapYear(2012)).toBe(true);
        });

        it("should be true for 2016", () => {
            expect(isLeapYear(2016)).toBe(true);
        });
    })

    describe("All years not divisible by 4 are NOT leap years (e.g. 2017, 2018, 2019)", () => {
        it("should be true for 2017", () => {
            expect(isLeapYear(2017)).toBe(false);
        });
    })
});

