import {Position} from "./Position";
import {Direction} from "./Direction";
import {Coordinates} from "./Coordinates";
import {SouthPosition} from "./SouthPosition";
import {NorthPosition} from "./NorthPosition";

export class WestPosition implements Position {
    readonly direction: Direction = Direction.WEST;
    readonly coordinates: Coordinates;

    constructor(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }

    forward(): Position {
        return new WestPosition(Coordinates.of(this.coordinates.x - 1, this.coordinates.y));
    }

    left(): Position {
        return new SouthPosition(this.coordinates);
    }

    right(): Position {
        return new NorthPosition(this.coordinates);
    }
}