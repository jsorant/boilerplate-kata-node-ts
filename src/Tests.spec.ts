import {describe, expect, it} from "vitest";
import {Combination, Combinations, Element, fitWall} from "./FitWall";

describe("Combinasion", () => {
    it("should have an hash based on elements", () => {
        expect(Combination.of([50]).hash()).toEqual("50;")
        expect(Combination.of([50, 50]).hash()).toEqual("50;50;")
        expect(Combination.of([50, 100]).hash()).toEqual("50;100;")
        expect(Combination.of([100, 50]).hash()).toEqual("50;100;")
    })
})


describe("Combinasions", () => {
    it("should add combination", () => {
        const combinations = new Combinations();
        combinations.add(Combination.of([50, 100]));

        expectCombinationsAreInAnyOrder(
            [Combination.of([50, 100])]
            , combinations);
    })

    it("should have no duplicates", () => {
        const combinations = new Combinations();

        combinations.add(Combination.of([50, 100]));
        combinations.add(Combination.of([50, 100]));
        combinations.add(Combination.of([100, 50]));

        expectCombinationsAreInAnyOrder(
            [Combination.of([50, 100])]
            , combinations);
    })
})

describe("Wardrobe", () => {
    it("should fit a wall of 150 with elements : 50", () => {
        const combinations = fitWall(150, [Element.of(50)]);

        expectCombinationsAreInAnyOrder(
            [Combination.of([50, 50, 50])]
            , combinations);
    });

    it("should fit a wall of 100 with elements : 100, 50", () => {
        const combinations = fitWall(100, [Element.of(100), Element.of(50)]);

        expectCombinationsAreInAnyOrder(
            [
                Combination.of([50, 50]),
                Combination.of([100])
            ]
            , combinations);
    });

    it("should fit a wall of 110 with elements : 100, 50", () => {
        const combinations = fitWall(110, [Element.of(100)]);

        expect(combinations.values()).toStrictEqual([]);
    });

    it("should fit a wall of 150 with elements : 100, 50", () => {
        const combinations = fitWall(150, [Element.of(100), Element.of(50)]);

        expectCombinationsAreInAnyOrder(
            [
                Combination.of([50, 50, 50]),
                Combination.of([100, 50])
            ]
            , combinations);
    });

    it("should fit a wall of 250 elements : 120, 100, 75, 50", () => {
        const combinations = fitWall(250, [Element.of(120), Element.of(100), Element.of(75), Element.of(50)]);

        expectCombinationsAreInAnyOrder(
            [
                Combination.of([50, 50, 50, 50, 50]),
                Combination.of([100, 50, 50, 50]),
                Combination.of([100, 100, 50]),
                Combination.of([75, 75, 100]),
                Combination.of([75, 75, 50, 50]),
            ]
            , combinations);
    });
});

function expectCombinationsAreInAnyOrder(expectedCombinations: Combination[], combinations: Combinations) {
    expect(combinations.values().length).toBe(expectedCombinations.length);
    expectedCombinations.forEach(expectedCombination => {
        expect(combinations.values()).toContainEqual(
            expectedCombination
        );
    })
}