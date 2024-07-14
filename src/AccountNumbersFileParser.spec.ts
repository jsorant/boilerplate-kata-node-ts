import {describe, expect, it} from "vitest";
import {AccountNumber} from "./AccountNumber";
import {AccountNumbersFileParser} from "./AccountNumbersFileParser";

describe("AccountNumbersFileParser", () => {
    it("should parse a valid file", async () => {
        const accountNumbers = await AccountNumbersFileParser.parse("./src/AccountNumbersFile.txt");
        expect(accountNumbers).toStrictEqual([
            AccountNumber.of("123456789"),
            AccountNumber.of("723456789"),
            AccountNumber.of("723456783")
        ])
    })
});