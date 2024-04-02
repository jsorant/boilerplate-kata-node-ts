import {describe, expect, test} from "vitest";
import {GildedRose} from "../src/gilded-rose";
import {GoldenGildedRose} from "../src/golden-gilded-rose";
import {Item} from "../src/item";

function makeItems() {
    return [
        new Item("+5 Dexterity Vest", 10, 20), //
        new Item("Aged Brie", 2, 0), //
        new Item("Elixir of the Mongoose", 5, 7), //
        new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        // this conjured item does not work properly yet
        //new Item("Conjured Mana Cake", 3, 6)
    ];
}

describe('Gilded Rose', () => {
    test('should foo', () => {
        const gildedRose = new GildedRose(makeItems());
        const goldenGildedRose = new GoldenGildedRose(makeItems());

        for (let i = 0; i < 100; i++) {
            gildedRose.updateQuality();
            goldenGildedRose.updateQuality();

            expect(goldenGildedRose.items).toStrictEqual(gildedRose.items);
        }
    });
});
