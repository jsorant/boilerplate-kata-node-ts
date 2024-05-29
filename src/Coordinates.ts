export class Coordinates {
    private constructor(public readonly x: number,
                        public readonly y: number) {
    }

    static of(x: number, y: number): Coordinates {
        return new Coordinates(x, y);
    }
}