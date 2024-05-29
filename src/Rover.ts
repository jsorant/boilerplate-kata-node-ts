import {Coordinates} from "./Coordinates";
import {Direction} from "./Direction";
import {Obstacles} from "./Obstacles";
import {Position} from "./Position";
import {NorthPosition} from "./NorthPosition";
import {EastPosition} from "./EastPosition";
import {SouthPosition} from "./SouthPosition";
import {WestPosition} from "./WestPosition";

export class Rover {

    constructor(private readonly orientedPosition: Position,
                private readonly obstacles: Obstacles) {
    }

    static of(position: Coordinates, direction: Direction, obstacles: Obstacles = Obstacles.EMPTY) {
        return new Rover(this.positionAndDirectionOf(position, direction), obstacles);
    }

    private static positionAndDirectionOf(position: Coordinates, direction: Direction) {
        if (direction === Direction.EAST) return new EastPosition(position);
        if (direction === Direction.SOUTH) return new SouthPosition(position);
        if (direction === Direction.WEST) return new WestPosition(position);
        return new NorthPosition(position);
    }

    get position() {
        return this.orientedPosition.coordinates;
    }

    get direction() {
        return this.orientedPosition.direction;
    }

    moveForward() {
        if (this.obstacles.includes(this.orientedPosition.forward().coordinates)) return this;
        return new Rover(this.orientedPosition.forward(), this.obstacles);
    }

    turnLeft() {
        return new Rover(this.orientedPosition.left(), this.obstacles);
    }

    turnRight() {
        return new Rover(this.orientedPosition.right(), this.obstacles);
    }
}