import { expect } from "chai";
import { Game } from "./Game";

describe("Bowling game", () => {
  let game = new Game();

  beforeEach(() => {
    game = new Game();
  });

  it("gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).to.equal(0);
  });

  it("1s game", () => {
    rollMany(20, 1);
    expect(game.score()).to.equal(20);
  });

  it("spare", () => {
    rollSpare();
    game.roll(4);
    rollMany(17, 0);
    expect(game.score()).to.equal(18);
  });

  it("strike", () => {
    rollStrike();
    game.roll(4);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).to.equal(26);
  });

  it("perfect game", () => {
    rollMany(12, 10);
    expect(game.score()).to.equal(300);
  });

  it("spare game", () => {
    rollMany(21, 5);
    expect(game.score()).to.equal(150);
  });

  function rollMany(times: number, pins: number) {
    for (let index = 0; index < times; index++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }
});
