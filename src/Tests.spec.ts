import {describe, expect, it} from "vitest";
import {HandValue, RockPaperScissor, RockPaperScissorResult} from "./RockPaperScissor";

describe("Rock Paper Scissor", () => {
    describe("Player one should win", () => {
        const testCases = [
            {playerOneHand: HandValue.ROCK, playerTwoHand: HandValue.SCISSORS},
            {playerOneHand: HandValue.SCISSORS, playerTwoHand: HandValue.PAPER},
            {playerOneHand: HandValue.PAPER, playerTwoHand: HandValue.ROCK}
        ];

        testCases.forEach(testCase => {
            it(`when player one hand is ${testCase.playerOneHand} and player two hand is ${testCase.playerTwoHand}`, () => {
                expect(RockPaperScissor.withHands({
                    playerOneHand: testCase.playerOneHand,
                    playerTwoHand: testCase.playerTwoHand
                }).act()).toBe(RockPaperScissorResult.PLAYER_ONE_WON);
            });
        })
    })

    describe("Player two should win", () => {
        const testCases = [
            {playerOneHand: HandValue.SCISSORS, playerTwoHand: HandValue.ROCK},
            {playerOneHand: HandValue.PAPER, playerTwoHand: HandValue.SCISSORS},
            {playerOneHand: HandValue.ROCK, playerTwoHand: HandValue.PAPER}
        ];

        testCases.forEach(testCase => {
            it(`when player one hand is ${testCase.playerOneHand} and player two hand is ${testCase.playerTwoHand}`, () => {
                expect(RockPaperScissor.withHands({
                    playerOneHand: testCase.playerOneHand,
                    playerTwoHand: testCase.playerTwoHand
                }).act()).toBe(RockPaperScissorResult.PLAYER_TWO_WON);
            });
        })
    })

    describe("Game should be a draw", () => {
        const hands = [
            HandValue.SCISSORS, HandValue.ROCK, HandValue.PAPER
        ];

        hands.forEach(hand => {
            it(`when player one hand is ${hand} and player two hand is ${hand}`, () => {
                expect(RockPaperScissor.withHands({
                    playerOneHand: hand,
                    playerTwoHand: hand
                }).act()).toBe(RockPaperScissorResult.DRAW);
            });
        })
    })
});
