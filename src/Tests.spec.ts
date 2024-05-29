import {describe, expect, it} from "vitest";
import {Direction} from "./Direction";
import {Coordinates} from "./Coordinates";
import {Rover} from "./Rover";
import {Obstacles} from "./Obstacles";


describe("Mars Rover", () => {
    it("should have a correct initial position", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.NORTH);

        expect(rover.position).toEqual(Coordinates.of(0, 0));
    });

    it("should have a correct initial direction", () => {
        const initialPosition = Coordinates.of(0, 0);

        expect(Rover.of(initialPosition, Direction.NORTH).direction).toEqual(Direction.NORTH);
        expect(Rover.of(initialPosition, Direction.SOUTH).direction).toEqual(Direction.SOUTH);
        expect(Rover.of(initialPosition, Direction.EAST).direction).toEqual(Direction.EAST);
        expect(Rover.of(initialPosition, Direction.WEST).direction).toEqual(Direction.WEST);
    });

    it("should move forward twice while facing north", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.NORTH).moveForward().moveForward();

        expect(rover.position).toEqual(Coordinates.of(0, 2));
        expect(rover.direction).toEqual(Direction.NORTH);
    });

    it("should move forward twice while facing south", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.SOUTH).moveForward().moveForward();

        expect(rover.position).toEqual(Coordinates.of(0, -2));
        expect(rover.direction).toEqual(Direction.SOUTH);
    });

    it("should move forward twice while facing east", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.EAST).moveForward().moveForward();

        expect(rover.position).toEqual(Coordinates.of(2, 0));
        expect(rover.direction).toEqual(Direction.EAST);
    });

    it("should move forward twice while facing west", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.WEST).moveForward().moveForward();

        expect(rover.position).toEqual(Coordinates.of(-2, 0));
        expect(rover.direction).toEqual(Direction.WEST);
    });

    it("should turn left while facing north", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.NORTH).turnLeft();

        expect(rover.position).toEqual(Coordinates.of(0, 0));
        expect(rover.direction).toEqual(Direction.WEST);
    });

    it("should turn left while facing east", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.EAST).turnLeft();

        expect(rover.position).toEqual(Coordinates.of(0, 0));
        expect(rover.direction).toEqual(Direction.NORTH);
    });

    it("should turn left while facing south", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.SOUTH).turnLeft();

        expect(rover.position).toEqual(Coordinates.of(0, 0));
        expect(rover.direction).toEqual(Direction.EAST);
    });

    it("should turn left while facing west", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.WEST).turnLeft();

        expect(rover.position).toEqual(Coordinates.of(0, 0));
        expect(rover.direction).toEqual(Direction.SOUTH);
    });

    it("should turn right while facing north", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.NORTH).turnRight();

        expect(rover.position).toEqual(Coordinates.of(0, 0));
        expect(rover.direction).toEqual(Direction.EAST);
    });

    it("should turn right while facing east", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.EAST).turnRight();

        expect(rover.position).toEqual(Coordinates.of(0, 0));
        expect(rover.direction).toEqual(Direction.SOUTH);
    });

    it("should turn right while facing south", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.SOUTH).turnRight();

        expect(rover.position).toEqual(Coordinates.of(0, 0));
        expect(rover.direction).toEqual(Direction.WEST);
    });

    it("should turn right while facing west", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.WEST).turnRight();

        expect(rover.position).toEqual(Coordinates.of(0, 0));
        expect(rover.direction).toEqual(Direction.NORTH);
    });

    it("should move", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.EAST)
            .turnLeft().moveForward().moveForward().turnRight().moveForward();

        expect(rover.position).toEqual(Coordinates.of(1, 2));
        expect(rover.direction).toEqual(Direction.EAST);
    });

    it("should be blocked by an obstacle", () => {
        const rover = Rover.of(Coordinates.of(0, 0), Direction.NORTH, Obstacles.of([
            Coordinates.of(0, 1),
            Coordinates.of(1, 2)
        ]))
            .moveForward()
            .turnRight().moveForward()
            .turnLeft().moveForward().moveForward()
            .turnRight().moveForward()
            .turnLeft().moveForward()
            .turnLeft().moveForward();

        expect(rover.position).toEqual(Coordinates.of(2, 2));
        expect(rover.direction).toEqual(Direction.WEST);
    });
});

