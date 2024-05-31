import {describe, expect, it} from "vitest";
import {Game} from "./Game";

describe("Bowling game", () => {
    it("should score 20 for a game of ones", () => {
        const game = new Game();

        game.roll(1);
        game.roll(1);
        game.roll(2);
        game.roll(2);
        for (let i = 0; i < 16; i++) {
            game.roll(0);
        }

        expect(game.score()).toBe(6);
        expect(game.score()).toBe(6);
    });

    it("should score a spare", () => {
        const game = new Game();

        game.roll(5);
        game.roll(5);
        game.roll(1);
        for (let i = 0; i < 17; i++) {
            game.roll(0);
        }

        expect(game.score()).toBe(12);
    });

    it("should score a strike", () => {
        const game = new Game();

        game.roll(10); // F1 : 10 + 1 + 1

        game.roll(1); // F2.1
        game.roll(1); // F2.2
        for (let i = 0; i < 16; i++) {
            game.roll(0);
        }

        expect(game.score()).toBe(14);
    });

    it("should score a perfect game", () => {
        const game = new Game();

        for (let i = 0; i < 12; i++) {
            game.roll(10);
        }

        expect(game.score()).toBe(300);
    });
});
