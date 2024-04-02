export class Item {
    name: string;
    sellIn: number;
    quality: number;


    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    update() {
        this.updateSellIn();
        this.updateQuality();
    }

    protected updateSellIn() {
        this.sellIn = this.sellIn - 1;
    }

    protected updateQuality() {
        this.decreaseQuality();
        if (this.sellIn < 0) {
            this.decreaseQuality();
        }
    }

    protected decreaseQuality() {
        if (this.quality > 0) {
            this.quality = this.quality - 1
        }
    }

    protected increaseQuality() {
        if (this.quality < 50) {
            this.quality = this.quality + 1
        }
    }
}

