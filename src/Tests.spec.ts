import {beforeEach, describe, expect, it} from "vitest";
import {Molkky} from "./Molkky";

describe("Molkky Game", () => {
    let game: Molkky;

    beforeEach(() => {
        game = new Molkky();
    })

    it("should score 0 for a new game", () => {
        expect(game.getScore()).toBe(0);
    });

    it("should score 2 when hitting 2 pins", () => {
        game.hitPins(2);

        expect(game.getScore()).toBe(2);
    });

    it("should score 5 when hitting 2 pins then 3 pins", () => {
        game.hitPins(2);
        game.hitPins(3);

        expect(game.getScore()).toBe(5);
    });

    it("should score 4 when hitting the pin with number 4", () => {
        game.hitPins(4);

        expect(game.getScore()).toBe(4);
    });

    it("should score 7 when hitting the pin with number 6 then pin with number 1", () => {
        game.hitPinWithNumber(6);
        game.hitPinWithNumber(1);

        expect(game.getScore()).toBe(7);
    });

    it("should score 25 when score goes beyond 50", () => {
        hitOnePinMultipleTimesToScore50();

        game.hitPinWithNumber(1);

        expect(game.getScore()).toBe(25);
    });

    it("should score 25 when score goes beyond 50 and hitting multiple pins", () => {
        hitMultiplePinsToScore50();

        game.hitPins(1);

        expect(game.getScore()).toBe(25);
    });

    it("should win the game if score is 50", () => {
        hitMultiplePinsToScore50();

        expect(game.win()).toBe(true);
    });

    it("should not win the game if score is 0", () => {
        expect(game.win()).toBe(false);
    });


    it("should not lose if the game is a new game", () => {
        expect(game.lose()).toBe(false);
    });

    it("should not lose if the game has missed once", () => {
        game.missPins();

        expect(game.lose()).toBe(false);
    });

    it("should not lose if the game has missed twice in a row", () => {
        game.missPins();
        game.missPins();

        expect(game.lose()).toBe(false);
    });

    it("should lose the game if miss pins 3 times in a rows", () => {
        game.missPins();
        game.missPins();
        game.missPins();

        expect(game.lose()).toBe(true);
    });

    it("should not lose the game if not miss pins 3 times in a rows", () => {
        game.missPins();
        game.missPins();
        game.hitPinWithNumber(1);
        game.missPins();

        expect(game.lose()).toBe(false);
    });

    it("should not lose the game if not miss pins 3 times in a rows", () => {
        game.missPins();
        game.missPins();
        game.hitPins(1);
        game.missPins();

        expect(game.lose()).toBe(false);
    });

    function hitOnePinMultipleTimesToScore50() {
        for (let i = 0; i < 5; i++) {
            game.hitPinWithNumber(10);
        }
    }

    function hitMultiplePinsToScore50() {
        for (let i = 0; i < 5; i++) {
            game.hitPins(10);
        }
    }
});
