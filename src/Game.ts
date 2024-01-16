const FRAMES = 10;

export class Game {
  #rolls: Array<number> = [];

  roll(pins: number) {
    this.#rolls.push(pins);
  }

  score(): number {
    let result = 0;

    let frameIndex = 0;
    for (let frameCount = 0; frameCount < FRAMES; frameCount++) {
      result += this.calculateFrameScore(frameIndex);
      frameIndex += this.calculateFrameIndexIncrement(frameIndex);
    }

    return result;
  }

  private calculateFrameIndexIncrement(frameIndex: number) {
    if (this.isStrike(frameIndex)) {
      return 1;
    }
    return 2;
  }

  private calculateFrameScore(frameIndex: number) {
    if (this.isStrike(frameIndex)) {
      return this.strikeScore(frameIndex);
    } else if (this.isSpare(frameIndex)) {
      return this.spareScore(frameIndex);
    }
    return this.frameScore(frameIndex);
  }

  private isStrike(frameIndex: number) {
    return this.#rolls[frameIndex] === 10;
  }

  private strikeScore(frameIndex: number) {
    return 10 + this.#rolls[frameIndex + 1] + this.#rolls[frameIndex + 2];
  }

  private isSpare(frameIndex: number) {
    return this.frameScore(frameIndex) === 10;
  }
  private spareScore(frameIndex: number) {
    return 10 + this.#rolls[frameIndex + 2];
  }

  private frameScore(frameIndex: number) {
    return this.#rolls[frameIndex] + this.#rolls[frameIndex + 1];
  }
}
