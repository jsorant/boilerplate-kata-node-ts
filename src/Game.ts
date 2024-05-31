export class Game {
    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    score(): number {
        let rollsCopy = [...this.rolls];

        let totalScore = 0;
        for (let frame = 0; frame < 10; frame++) {
            totalScore += Game.frameScore(rollsCopy);
            rollsCopy = rollsCopy.slice(Game.rollsToRemove(rollsCopy));
        }

        return totalScore;
    }

    private static frameScore(rollsCopy: number[]) {
        if (Game.isStrike(rollsCopy))
            return Game.strikeScore(rollsCopy);
        if (Game.isSpare(rollsCopy))
            return Game.spareScore(rollsCopy);
        return Game.normalScore(rollsCopy);
    }

    private static rollsToRemove(rollsCopy: number[]) {
        return Game.isStrike(rollsCopy) ? 1 : 2;
    }

    private static normalScore(rollsCopy: number[]) {
        return rollsCopy[0] + rollsCopy[1];
    }

    private static isSpare(rollsCopy: number[]) {
        return rollsCopy[0] + rollsCopy[1] === 10;
    }

    private static isStrike(rollsCopy: number[]) {
        return rollsCopy[0] === 10;
    }

    private static spareScore(rollsCopy: number[]) {
        const nextRoll = rollsCopy[2];
        return 10 + nextRoll;
    }

    private static strikeScore(rollsCopy: number[]) {
        const nextTwoRolls = rollsCopy[1] + rollsCopy[2];
        return 10 + nextTwoRolls;
    }
}
