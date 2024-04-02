import {Item} from "./item";

export class AgedBrie extends Item {
    protected override updateQuality() {
        this.increaseQuality();
        if (this.sellIn < 0) {
            this.increaseQuality();
        }
    }
}