export class Element {
    private constructor(public readonly width: number) {
    }

    static of(width: number) {
        return new Element(width);
    }
}

export class Combination {
    private constructor(public readonly elements: Element[]) {
    }

    static of(elementsWidths: number[]) {
        return new Combination(elementsWidths.map(width => Element.of(width)));
    }
}

export function fitWall(wallWidth: number, elements: Element[]): Combination[] {

    let result = [];

    for (const element of elements) {
        let currentCombination = Combination.of([])

        let remainingWall = wallWidth;

        while (remainingWall >= element.width) {
            currentCombination.elements.push(Element.of(element.width))
            remainingWall -= element.width
        }

        for (const elementKey of elements) {
            if (remainingWall >= elementKey.width) {
                currentCombination.elements.push(Element.of(elementKey.width))
                remainingWall -= elementKey.width
            }
        }

        if (remainingWall === 0)
            result.push(currentCombination);
    }
    
    return result
}