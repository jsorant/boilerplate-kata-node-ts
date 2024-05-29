import {Position} from "./Position";
import {Direction} from "./Direction";
import {Coordinates} from "./Coordinates";
import {WestPosition} from "./WestPosition";
import {EastPosition} from "./EastPosition";

export class NorthPosition implements Position {
    readonly direction: Direction = Direction.NORTH;
    readonly coordinates: Coordinates;

    constructor(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }

    forward(): Position {
        return new NorthPosition(Coordinates.of(this.coordinates.x, this.coordinates.y + 1));
    }

    left(): Position {
        return new WestPosition(this.coordinates);
    }

    right(): Position {
        return new EastPosition(this.coordinates);
    }
}