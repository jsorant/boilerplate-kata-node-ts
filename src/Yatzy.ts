export type Dice = 1 | 2 | 3 | 4 | 5 | 6;

export type Dices = [Dice, Dice, Dice, Dice, Dice];

export class Game {
    private readonly DICES_VALUES: Dice[] = [6, 5, 4, 3, 2, 1];

    constructor(private readonly dices: Dices) {
    }

    get chance(): number {
        return this.dices.reduce((score, current) => score + current, 0);
    }

    get yatzy(): number {
        const [firstDice, ...otherDices] = this.dices;
        const areAllTheSame = otherDices.every((dice) => dice === firstDice);
        return areAllTheSame ? 50 : 0;
    }

    numbers(lookingDice: Dice) {
        return this.dices.filter(dice => dice === lookingDice).length * lookingDice;
    }

    get pair() {
        return this.pairsScores.at(0) ?? 0;
    }

    get twoPairs() {
        const [first, second] = this.pairsScores;

        if (first && second) return first + second;

        return 0;
    }

    private get pairsScores() {
        return this.DICES_VALUES
            .filter(this.hasPairOf, this)
            .map(dice => dice * 2)
    }

    private hasPairOf(currentDice: number) {
        const count = this.dices.filter(dice => dice === currentDice).length;
        return count >= 2;
    }
}

