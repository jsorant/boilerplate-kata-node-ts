import {describe, expect, it} from "vitest";
import {Combination, Element, fitWall} from "./FitWall";


describe("Wardrobe", () => {
    it("should fit a wall of 150 with elements : 50", () => {
        const combinations = fitWall(150, [Element.of(50)]);

        expect(combinations).toStrictEqual(
            [Combination.of([50, 50, 50])]
        )
    });

    it("should fit a wall of 100 with elements : 100, 50", () => {
        const combinations = fitWall(100, [Element.of(100), Element.of(50)]);

        expect(combinations).toStrictEqual(
            [
                Combination.of([100]),
                Combination.of([50, 50])
            ]
        )
    });

    it("should fit a wall of 150 with elements : 100, 50", () => {
        const combinations = fitWall(150, [Element.of(100), Element.of(50)]);

        expect(combinations).toStrictEqual(
            [
                Combination.of([100, 50]),
                Combination.of([50, 50, 50])
            ]
        )
    });

    it("should fit a wall of 110 with elements : 100, 50", () => {
        const combinations = fitWall(110, [Element.of(100), Element.of(50)]);

        expect(combinations).toStrictEqual(
            []
        )
    });
});
