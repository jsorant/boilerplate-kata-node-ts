import {Item} from "./items/item";

export class GildedRose {
    items: Array<Item>;

    constructor(items: Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (const item of this.items) {
            item.update();
        }

        return this.items;
    }
}
