import {describe, expect, it} from "vitest";
import {HandValue, Result, RockPaperScissor} from "./RockPaperScissor";

describe("Rock Paper Scissor", () => {
    it("player 1 should win", () => {
        expect(RockPaperScissor
            .withPlayerOneHand(HandValue.ROCK)
            .withPlayerTwoHand(HandValue.SCISSORS)
            .act()).toBe(Result.PLAYER_ONE_WON);

        expect(RockPaperScissor
            .withPlayerOneHand(HandValue.SCISSORS)
            .withPlayerTwoHand(HandValue.PAPER)
            .act()).toBe(Result.PLAYER_ONE_WON);

        expect(RockPaperScissor
            .withPlayerOneHand(HandValue.PAPER)
            .withPlayerTwoHand(HandValue.ROCK)
            .act()).toBe(Result.PLAYER_ONE_WON);
    });

    it("player 2 should win", () => {
        expect(RockPaperScissor
            .withPlayerOneHand(HandValue.SCISSORS)
            .withPlayerTwoHand(HandValue.ROCK)
            .act()).toBe(Result.PLAYER_TWO_WON);

        expect(RockPaperScissor
            .withPlayerOneHand(HandValue.PAPER)
            .withPlayerTwoHand(HandValue.SCISSORS)
            .act()).toBe(Result.PLAYER_TWO_WON);

        expect(RockPaperScissor
            .withPlayerOneHand(HandValue.ROCK)
            .withPlayerTwoHand(HandValue.PAPER)
            .act()).toBe(Result.PLAYER_TWO_WON);
    });

    it("should be a draw", () => {
        expect(RockPaperScissor
            .withPlayerOneHand(HandValue.SCISSORS)
            .withPlayerTwoHand(HandValue.SCISSORS)
            .act()).toBe(Result.DRAW);

        expect(RockPaperScissor
            .withPlayerOneHand(HandValue.PAPER)
            .withPlayerTwoHand(HandValue.PAPER)
            .act()).toBe(Result.DRAW);

        expect(RockPaperScissor
            .withPlayerOneHand(HandValue.ROCK)
            .withPlayerTwoHand(HandValue.ROCK)
            .act()).toBe(Result.DRAW);
    });
});
