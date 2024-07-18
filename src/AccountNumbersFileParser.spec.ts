import {describe, expect, it} from "vitest";
import {AccountNumbersFileParser} from "./AccountNumbersFileParser";

describe("AccountNumbersFileParser", () => {
    it("should parse a valid file", async () => {
        const accountNumbers = await AccountNumbersFileParser.parse("./src/AccountNumbersFile.txt");
        expect(accountNumbers).toStrictEqual([
            "457508000",
            "664371495 ERR",
            "86110??36 ILL"
        ])
    })
});