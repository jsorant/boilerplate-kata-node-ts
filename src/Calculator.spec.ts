import { expect } from "chai";

interface Position {
  x: number;
  y: number;
  orientation: string;

  move(): Position;

  turnRight(): Position;

  toString(): string;

  equals(other: Position): boolean;
}

abstract class BasePosition implements Position {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly orientation: string
  ) {}

  abstract move(): Position;
  abstract turnRight(): Position;

  equals(other: Position): boolean {
    return (
      this.x === other.x &&
      this.y === other.y &&
      this.orientation === other.orientation
    );
  }

  toString(): string {
    return `${this.x}:${this.y}:${this.orientation}`;
  }
}

class WestPosition extends BasePosition {
  constructor(public readonly x: number, public readonly y: number) {
    super(x, y, "W");
  }

  move(): Position {
    return new WestPosition(this.x - 1, this.y);
  }

  turnRight(): Position {
    return new WestPosition(this.x, this.y);
  }
}

class SouthPosition extends BasePosition {
  constructor(public readonly x: number, public readonly y: number) {
    super(x, y, "S");
  }

  move(): Position {
    return new SouthPosition(this.x, this.y - 1);
  }

  turnRight(): Position {
    return new WestPosition(this.x, this.y);
  }
}

class EastPosition extends BasePosition {
  constructor(public readonly x: number, public readonly y: number) {
    super(x, y, "E");
  }

  move(): Position {
    return new EastPosition(this.x + 1, this.y);
  }

  turnRight(): Position {
    return new SouthPosition(this.x, this.y);
  }
}

class NorthPosition extends BasePosition {
  constructor(public readonly x: number, public readonly y: number) {
    super(x, y, "N");
  }

  move(): Position {
    return new NorthPosition(this.x, this.y + 1);
  }

  turnRight(): Position {
    return new EastPosition(this.x, this.y);
  }
}

class Rover {
  constructor(public readonly position: Position = new NorthPosition(0, 0)) {}

  move() {
    return new Rover(this.position.move());
  }

  turnRight() {
    return new Rover(this.position.turnRight());
  }
}

describe("Mars Rover", () => {
  it("should move ahead with call move", () => {
    const rover = new Rover();
    expect(rover.move().position.toString()).to.equal("0:1:N");
  });

  it("should move ahead with call twice move", () => {
    const rover = new Rover();
    expect(rover.move().move().position.toString()).to.equal("0:2:N");
  });

  it("should face east when call right", () => {
    const rover = new Rover();
    expect(rover.turnRight().position.toString()).to.equal("0:0:E");
  });

  it("should face south when call twice right", () => {
    const rover = new Rover();
    expect(rover.turnRight().turnRight().position.toString()).to.equal("0:0:S");
  });

  it("should face south when call twice right", () => {
    const rover = new Rover();
    expect(rover.turnRight().turnRight().position.toString()).to.equal("0:0:S");
  });

  it("should face south when call three times right", () => {
    const rover = new Rover();
    expect(
      rover.turnRight().turnRight().turnRight().position.toString()
    ).to.equal("0:0:W");
  });

  it("should face est and move of x = 1 when call right and move", () => {
    const rover = new Rover();
    expect(rover.turnRight().move().position.toString()).to.equal("1:0:E");
  });

  it("should face west and move of x = 0 when call right and move right right move", () => {
    const rover = new Rover();
    expect(
      rover
        .turnRight()
        .move()
        .turnRight()
        .turnRight()
        .move()
        .position.toString()
    ).to.equal("0:0:W");
  });

  it("should face west and move of x = 0 when call right and twice move right right move", () => {
    const rover = new Rover();
    expect(
      rover
        .turnRight()
        .move()
        .move()
        .turnRight()
        .turnRight()
        .move()
        .position.toString()
    ).to.equal("1:0:W");
  });

  it("should face south and move of y = 1 when call move twice and right twice and move", () => {
    const rover = new Rover();
    expect(
      rover.move().move().turnRight().turnRight().move().position.toString()
    ).to.equal("0:1:S");
  });
});
