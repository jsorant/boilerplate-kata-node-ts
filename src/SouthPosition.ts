import {Position} from "./Position";
import {Direction} from "./Direction";
import {Coordinates} from "./Coordinates";
import {EastPosition} from "./EastPosition";
import {WestPosition} from "./WestPosition";

export class SouthPosition implements Position {
    readonly direction: Direction = Direction.SOUTH;
    readonly coordinates: Coordinates;

    constructor(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }

    forward(): Position {
        return new SouthPosition(Coordinates.of(this.coordinates.x, this.coordinates.y - 1));
    }

    left(): Position {
        return new EastPosition(this.coordinates);
    }

    right(): Position {
        return new WestPosition(this.coordinates);
    }
}