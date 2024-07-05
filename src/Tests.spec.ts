import {describe, expect, it} from "vitest";
import {Dice, Dices, Game} from "./Yatzy";

describe("Yatzy", () => {
    describe("Chance", () => {
        it.each([
            {dices: [1, 1, 3, 3, 6], score: 14},
            {dices: [4, 5, 5, 6, 1], score: 21},
        ])("should score $score", ({dices, score}) => {
            expect(new Game(dices as Dices).chance).toBe(score);
        });
    })

    describe("Yatzy", () => {
        it.each([
            {dices: [1, 1, 1, 1, 1], score: 50},
            {dices: [1, 1, 1, 2, 1], score: 0},
        ])("should score $score", ({dices, score}) => {
            expect(new Game(dices as Dices).yatzy).toBe(score);
        });
    })

    describe("Numbers", () => {
        it.each([
            {dices: [1, 1, 2, 4, 4], score: 8, number: 4},
            {dices: [4, 1, 2, 4, 4], score: 12, number: 4},
            {dices: [1, 1, 2, 4, 4], score: 2, number: 1},
            {dices: [1, 1, 2, 4, 4], score: 0, number: 3},
        ])("should score $score", ({dices, score, number}) => {
            expect(new Game(dices as Dices).numbers(number as Dice)).toBe(score);
        });
    })

    describe("Pair", () => {
        it.each([
            {dices: [1, 2, 3, 4, 5], score: 0},
            {dices: [3, 3, 3, 4, 4], score: 8},
            {dices: [3, 3, 4, 4, 3], score: 8},
            {dices: [3, 4, 4, 4, 1], score: 8},
            {dices: [3, 3, 6, 6, 3], score: 12},
        ])("should score $score", ({dices, score}) => {
            expect(new Game(dices as Dices).pair).toBe(score);
        });
    })

    describe("Two pairs", () => {
        it.each([
            {dices: [1, 1, 2, 3, 3], score: 8},
            {dices: [1, 1, 2, 3, 4], score: 0},
            {dices: [1, 1, 2, 2, 2], score: 6},
            {dices: [3, 3, 3, 3, 1], score: 0},
        ])("should score $score", ({dices, score}) => {
            expect(new Game(dices as Dices).twoPairs).toBe(score);
        });
    })
});

