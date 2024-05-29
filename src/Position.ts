import {Direction} from "./Direction";
import {Coordinates} from "./Coordinates";

export interface Position {
    readonly direction: Direction;
    readonly coordinates: Coordinates;

    forward(): Position;

    left(): Position;

    right(): Position;
}