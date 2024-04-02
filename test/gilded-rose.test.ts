import {expect, test, describe} from "vitest";
import {GildedRose, Item} from "../src/gilded-rose";

describe('Gilded Rose', () => {
    test('should foo', () => {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe('fixme');
    });
});
