import {describe, expect, it} from "vitest";
import {fitWall} from "./FitWall";

describe("Ward Robe", () => {
    const testCases = [
        {wallWidth: 0, elements: [], expected: []},
        {wallWidth: 0, elements: [50], expected: []},
        {wallWidth: 50, elements: [], expected: []},
        {wallWidth: 50, elements: [50], expected: ["50;"]},
        {wallWidth: 100, elements: [50], expected: ["50;50;"]},
        {wallWidth: 120, elements: [50], expected: []},
        {wallWidth: 100, elements: [100], expected: ["100;"]},
        {wallWidth: 100, elements: [50, 100], expected: ["50;50;", "100;"]},
        {wallWidth: 150, elements: [50, 100], expected: ["50;50;50;", "50;100;"]},
        {
            wallWidth: 250,
            elements: [50, 75, 100, 120],
            expected: ["50;50;50;50;50;", "50;50;50;100;", "50;100;100;", "75;75;100;", "50;50;75;75;"]
        },
    ]

    testCases.forEach(testCase => {
        it(`should fit a wall of ${testCase.wallWidth} with elements: ${testCase.elements}`, () => {
            expect(fitWall(testCase.wallWidth, testCase.elements).sort()).toEqual(testCase.expected.sort());
        });
    })
});
