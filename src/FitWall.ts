export class Element {
    private constructor(public readonly width: number) {
    }

    static of(width: number) {
        return new Element(width);
    }

    copy() {
        return new Element(this.width);
    }
}

export class Combination {
    private constructor(private readonly elements: Element[]) {
    }

    static of(elementsWidths: number[]) {
        return new Combination(elementsWidths.map(width => Element.of(width))
            .sort((a, b) => a.width - b.width));
    }

    copy() {
        return new Combination([...this.elements]);
    }

    hash() {
        return [...this.elements]
            .sort((a, b) => a.width - b.width)
            .reduce((acc, current) => acc += `${current.width};`, "");
    }

    add(element: Element) {
        this.elements.push(element);
    }
}

export class Combinations {
    private map = new Map<string, Combination>();

    add(combination: Combination) {
        this.map.set(combination.hash(), combination);
    }

    values(): Combination[] {
        return Array.from(this.map.values());
    }
}

export function fitWall(wallWidth: number, elements: Element[]): Combinations {
    let result: Combinations = new Combinations();

    for (const element of elements) {
        addElement(elements, element, wallWidth, Combination.of([]), result);
    }

    return result;
}

function addElement(elements: Element[], elementToAdd: Element, wallWidth: number, currentCombination: Combination, result: Combinations) {
    if (wallWidth >= elementToAdd.width) {
        currentCombination.add(elementToAdd.copy())
    }

    const remainingWidth = wallWidth - elementToAdd.width;

    if (remainingWidth === 0) {
        result.add(currentCombination);
        return;
    }

    if (remainingWidth > 0) {
        for (const element of elements) {
            addElement(elements, element, remainingWidth, currentCombination.copy(), result);
        }
    }
}