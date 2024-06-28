interface RockPaperScissorInput {
    playerOneHand: HandValue;
    playerTwoHand: HandValue;
}

export enum RockPaperScissorResult {
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
    private readonly playerOneHand: Hand;
    private readonly playerTwoHand: Hand;

    private constructor(input: RockPaperScissorInput) {
        this.playerOneHand = Hand.of(input.playerOneHand);
        this.playerTwoHand = Hand.of(input.playerTwoHand);
    }

    static withHands(input: RockPaperScissorInput): RockPaperScissor {
        return new RockPaperScissor(input);
    }

    act(): RockPaperScissorResult {
        if (this.playerOneHand.equals(this.playerTwoHand)) return RockPaperScissorResult.DRAW;
        if (this.playerOneHand.beats(this.playerTwoHand)) return RockPaperScissorResult.PLAYER_ONE_WON;
        return RockPaperScissorResult.PLAYER_TWO_WON;
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
