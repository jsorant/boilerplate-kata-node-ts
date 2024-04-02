import {Item} from "./item";

export class Conjured extends Item {
    protected override updateQuality() {
        super.updateQuality();
        super.updateQuality();
    }
}