import { expect, test, beforeEach, describe } from "vitest";
import { Game } from "./Game";

describe("Bowling Game", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  test("should score 0 for gutter game", () => {
    makeRolls(20, 0);

    expect(game.score()).toBe(0);
  });

  test("should score 20 for a game of ones", () => {
    makeRolls(20, 1);

    expect(game.score()).toBe(20);
  });

  test("should score 20 for 6 4 5 0 0...", () => {
    game.roll(6);
    game.roll(4);
    game.roll(5);

    makeRolls(17, 0);

    expect(game.score()).toBe(20);
  });

  test("should score 20 for 10 4 5 0 0...", () => {
    game.roll(10);
    game.roll(4);
    game.roll(5);

    makeRolls(16, 0);

    expect(game.score()).toBe(28);
  });

  test("should score 300 for perfect game", () => {
    makeRolls(12, 10);

    expect(game.score()).toBe(300);
  });

  test("should score 150 for spare game", () => {
    makeRolls(21, 5);

    expect(game.score()).toBe(150);
  });

  function makeRolls(rollsCount: number, pins: number) {
    for (let index = 0; index < rollsCount; index++) {
      game.roll(pins);
    }
  }
});
