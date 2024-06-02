export function fitWall(wallWidth: number, elements: number[]) {
    if (elements.length === 0) return [];

    const result: Set<string> = new Set<string>();

    for (const element of elements) {
        findCombination(element, wallWidth, elements, [], result);
    }

    return Array.from(result);
}

function findCombination(element: number, wallWidth: number, elements: number[], currentCombination: number[], result: Set<string>) {
    if (wallWidth < element) return;

    currentCombination.push(element);

    if (perfectFit(wallWidth, element)) {
        addToResult(currentCombination, result);
        return;
    }

    for (const anotherElement of elements) {
        const remainingWidth = wallWidth - element;
        const currentCombinationCopy = [...currentCombination];
        findCombination(anotherElement, remainingWidth, elements, currentCombinationCopy, result);
    }
}

function perfectFit(wallWidth: number, element: number) {
    return wallWidth === element;
}

function addToResult(currentCombination: number[], result: Set<string>) {
    currentCombination.sort((a, b) => a - b);
    result.add(toResultCombination(currentCombination));
}

function toResultCombination(combination: number[]) {
    return combination.reduce((acc, current) => acc += `${current};`, "");
}
