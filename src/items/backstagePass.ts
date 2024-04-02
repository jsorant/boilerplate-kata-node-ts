import {Item} from "./item";

export class BackstagePass extends Item {
    protected override updateQuality() {
        this.increaseQuality()
        if (this.sellIn < 10) {
            this.increaseQuality()
        }
        if (this.sellIn < 5) {
            this.increaseQuality()
        }

        if (this.sellIn < 0) {
            this.quality = 0;
        }
    }
}