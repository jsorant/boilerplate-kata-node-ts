export enum Result {
    PLAYER_ONE_WON = "PLAYER_ONE_WON",
    PLAYER_TWO_WON = "PLAYER_TWO_WON",
    DRAW = "DRAW",
}

export enum HandValue {
    ROCK = "ROCK",
    SCISSORS = "SCISSORS",
    PAPER = "PAPER",
}

export class RockPaperScissor {
    constructor(private readonly playerOneHand: Hand,
                private readonly playerTwoHand: Hand) {
    }

    static withPlayerOneHand(value: HandValue) {
        return new RockPaperScissorBuilder(Hand.of(value));
    }

    act() {
        if (this.playerOneHand.equals(this.playerTwoHand)) return Result.DRAW;
        if (this.playerOneHand.beats(this.playerTwoHand)) return Result.PLAYER_ONE_WON;
        return Result.PLAYER_TWO_WON;
    }
}

export class RockPaperScissorBuilder {
    private readonly playerOneHand: Hand;

    constructor(playerOneHand: Hand) {
        this.playerOneHand = playerOneHand;
    }

    withPlayerTwoHand(playerTwoHandValue: HandValue): RockPaperScissor {
        return new RockPaperScissor(this.playerOneHand, Hand.of(playerTwoHandValue));
    }
}

class Hand {
    private static beatsCombinations = [
        {hand: HandValue.ROCK, other: HandValue.SCISSORS},
        {hand: HandValue.SCISSORS, other: HandValue.PAPER},
        {hand: HandValue.PAPER, other: HandValue.ROCK},
    ]

    private constructor(private readonly value: HandValue) {
    }

    static of(value: HandValue) {
        return new Hand(value);
    }

    beats(other: Hand): boolean {
        return Hand.beatsCombinations.some(combination =>
            combination.hand === this.value && combination.other === other.value
        );
    }

    equals(other: Hand): boolean {
        return this.value === other.value;
    }
}
