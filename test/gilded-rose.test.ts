import {describe, expect, test} from "vitest";
import {GildedRose} from "../src/gilded-rose";
import {GoldenGildedRose} from "../src/golden-gilded-rose";
import {Item} from "../src/items/item";
import {AgedBrie} from "../src/items/aged.brie";
import {Sulfura} from "../src/items/sulfura";
import {BackstagePass} from "../src/items/backstagePass";
import {Conjured} from "../src/items/conjured";


function makeItems() {
    return [
        new Item("+5 Dexterity Vest", 10, 20), //
        new AgedBrie("Aged Brie", 2, 0), //
        new Item("Elixir of the Mongoose", 5, 7), //
        new Sulfura("Sulfuras, Hand of Ragnaros", 0, 80), //
        new Sulfura("Sulfuras, Hand of Ragnaros", -1, 80),
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ];
}

describe('Gilded Rose', () => {
    test('should match golden master', () => {
        const gildedRose = new GildedRose(makeItems());
        const goldenGildedRose = new GoldenGildedRose(makeItems());

        for (let i = 0; i < 100; i++) {
            gildedRose.updateQuality();
            goldenGildedRose.updateQuality();

            expect(goldenGildedRose.items).toStrictEqual(gildedRose.items);
        }
    });

    test("should handle conjured items", () => {
        const conjuredItem = new Conjured("Conjured Mana Cake", 2, 12);

        conjuredItem.update();

        expect(conjuredItem.quality).toBe(10)
        expect(conjuredItem.sellIn).toBe(1)

        conjuredItem.update();

        expect(conjuredItem.quality).toBe(8)
        expect(conjuredItem.sellIn).toBe(0)

        conjuredItem.update();

        expect(conjuredItem.quality).toBe(4)
        expect(conjuredItem.sellIn).toBe(-1)
    })
});
