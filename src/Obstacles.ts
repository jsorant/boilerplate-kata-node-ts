import {Coordinates} from "./Coordinates";

export class Obstacles {
    static EMPTY: Obstacles = Obstacles.of([]);

    private constructor(public readonly positions: Coordinates[]) {
    }

    static of(positions: Coordinates[]) {
        return new Obstacles(positions);
    }

    includes(aPosition: Coordinates) {
        return this.positions.find(
            (item) => item.x === aPosition.x && item.y === aPosition.y
        );
    }
}