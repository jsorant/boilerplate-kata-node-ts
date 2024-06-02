import {expect, it, describe} from "vitest";

function fitWall(wallWidth: number, elements: number[]) {
    if (elements.length === 0) return [];

    const result: string[] = [];

    for (const element of elements) {
        let remainingWallWidth = wallWidth;
        let combination = "";

        while (remainingWallWidth >= element) {
            combination += `${element};`;
            remainingWallWidth -= element;
        }

        if (combination.length > 0 && remainingWallWidth === 0) result.push(combination);
    }

    return result;
}

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
        {wallWidth: 150, elements: [50, 100], expected: ["50;50;50;", "100;50;"]},
    ]

    testCases.forEach(testCase => {
        it(`should fit a wall of ${testCase.wallWidth} with elements: ${testCase.elements}`, () => {
            expect(fitWall(testCase.wallWidth, testCase.elements)).toEqual(testCase.expected);
        });
    })
});
