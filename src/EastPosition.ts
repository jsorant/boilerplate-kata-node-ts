import {Position} from "./Position";
import {Direction} from "./Direction";
import {Coordinates} from "./Coordinates";
import {NorthPosition} from "./NorthPosition";
import {SouthPosition} from "./SouthPosition";

export class EastPosition implements Position {
    readonly direction: Direction = Direction.EAST;
    readonly coordinates: Coordinates;

    constructor(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }

    forward(): Position {
        return new EastPosition(Coordinates.of(this.coordinates.x + 1, this.coordinates.y));
    }

    left(): Position {
        return new NorthPosition(this.coordinates);
    }

    right(): Position {
        return new SouthPosition(this.coordinates);
    }
}