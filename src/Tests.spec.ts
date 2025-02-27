import {describe, expect, it} from "vitest";

class Jeu {
    rolls: number[] = [];

    roll(pins: number) {
        this.rolls.push(pins);
    }

    score() {
        let score = 0;
        let firstRollInFrame = 0;

        for (let frame = 0; frame < 10; frame++) {
            score += this.frameScore(firstRollInFrame);
            firstRollInFrame += this.incrementToNextFrame(firstRollInFrame);
        }

        return score;
    }

    private frameScore(firstRollInFrame: number) {
        if (this.isStrike(firstRollInFrame)) {
            return this.calculateStrike(firstRollInFrame);
        }

        if (this.isSpare(firstRollInFrame)) {
            return this.calculateSpare(firstRollInFrame);
        }

        return this.calculateFrame(firstRollInFrame);
    }

    private calculateFrame(firstRollInFrame: number) {
        return this.rolls[firstRollInFrame] + this.rolls[firstRollInFrame + 1];
    }

    private incrementToNextFrame(firstRollInFrame: number) {
        if (this.isStrike(firstRollInFrame)) {
            return 1;
        }
        return 2;
    }

    private calculateSpare(i: number) {
        return 10 + this.rolls[i + 2];
    }

    private calculateStrike(i: number) {
        return 10 + this.rolls[i + 1] + this.rolls[i + 2];
    }

    private isStrike(i: number) {
        return this.rolls[i] === 10;
    }

    private isSpare(i: number) {
        return this.rolls[i] + this.rolls[i + 1] === 10;
    }
}

describe("Bowling", () => {
    it("should score 0 for gutter game", () => {
        const jeu = new Jeu();

        for (let i = 0; i < 20; i++) {
            jeu.roll(0);
        }

        expect(jeu.score()).toBe(0);
    });

    it("should score 20 for a game of ones", () => {
        const jeu = new Jeu();

        for (let i = 0; i < 20; i++) {
            jeu.roll(1);
        }

        expect(jeu.score()).toBe(20);
    });

    it("should score a spare", () => {
        const jeu = new Jeu();

        jeu.roll(2);
        jeu.roll(8);

        jeu.roll(1);

        for (let i = 0; i < 17; i++) {
            jeu.roll(0);
        }

        expect(jeu.score()).toBe(12);
    });

    it("should score a spare 2", () => {
        const jeu = new Jeu();

        jeu.roll(0);
        jeu.roll(10);

        jeu.roll(1);

        for (let i = 0; i < 17; i++) {
            jeu.roll(0);
        }

        expect(jeu.score()).toBe(12);
    });

    it("should score a strike", () => {
        const jeu = new Jeu();

        jeu.roll(10);

        jeu.roll(1);
        jeu.roll(2);

        for (let i = 0; i < 16; i++) {
            jeu.roll(0);
        }

        expect(jeu.score()).toBe(16);
    });
});

