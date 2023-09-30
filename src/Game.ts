export class Game {
  private rolls: Array<number> = [];

  roll(pins: number) {
    this.rolls.push(pins);
  }

  score(): number {
    let result = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        result += 10 + this.strikeBonus(frameIndex);
        frameIndex += 1;
      } else if (this.isSpare(frameIndex)) {
        result += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        result += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return result;
  }

  private strikeBonus(frameIndex: number) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  private isStrike(frameIndex: number) {
    return this.rolls[frameIndex] === 10;
  }

  private spareBonus(frameIndex: number) {
    return this.rolls[frameIndex + 2];
  }

  private isSpare(frameIndex: number) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
}
