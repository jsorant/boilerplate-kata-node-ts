export class Molkky {
    private score: number = 0;
    private missCount: number = 0;

    getScore(): number {
        return this.score;
    }

    hitPins(pinsCount: number) {
        this.updateScore(pinsCount);
    }

    hitPinWithNumber(number: number) {
        this.updateScore(number);
    }

    win() {
        return this.score === 50;
    }

    missPins() {
        this.missCount++;
    }

    lose() {
        return this.missCount >= 3;
    }

    private updateScore(scoreToAdd: number) {
        this.score += scoreToAdd;
        this.applyPenaltyIfScoreGoesBeyond50();
        this.missCount = 0;
    }

    private applyPenaltyIfScoreGoesBeyond50() {
        if (this.score > 50) this.score = 25;
    }
}