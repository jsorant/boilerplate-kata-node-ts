import {describe, expect, it} from "vitest";
import {AccountNumber} from "./AccountNumber";
import {open} from 'node:fs/promises';
import {AccountNumberParser} from "./AccountNumberParser";

class AccountNumbersFileParser {
    static async parse(filePath: string) {
        const file = await open(filePath);
        const lines = [];
        for await (const line of file.readLines()) {
            console.log(line)
            lines.push(line);
        }
        return [AccountNumberParser.toAccountNumber(lines)];
    }
}

describe("AccountNumbersFileParser", () => {
    it("should parse a valid file", async () => {
        const accountNumbers = await AccountNumbersFileParser.parse("./src/AccountNumbersFile.txt");
        expect(accountNumbers).toStrictEqual([
            AccountNumber.of("123456789"),
            AccountNumber.of("723456789")
        ])
    })
});