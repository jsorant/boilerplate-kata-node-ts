import {open} from "node:fs/promises";
import {Entry} from "./Entry";
import {AccountNumber, AccountNumberState} from "./AccountNumber";

export class AccountNumbersFileParser {
    static async parse(filePath: string) {
        const entries = await this.readEntriesOf(filePath);
        return entries
            .map(entry => entry.toAccountNumber())
            .map(this.toText);
    }

    private static toText(accountNumber: AccountNumber) {
        const converters: Record<AccountNumberState, (accountNumber: AccountNumber) => string> = {
            VALID: (accountNumber) => accountNumber.value,
            WRONG_CHECKSUM: (accountNumber) => `${accountNumber.value} ERR`,
            HAS_ILLEGIBLE_NUMBERS: (accountNumber) => `${accountNumber.value} ILL`
        }

        return converters[accountNumber.state](accountNumber);
    }

    private static async readEntriesOf(filePath: string) {
        const file = await open(filePath);

        const entries: Entry[] = [];
        let currentEntryLines: string[] = [];
        let index = 0;

        for await (const line of file.readLines()) {
            currentEntryLines.push(line);
            index++;
            if (index === 4) {
                entries.push(Entry.of(currentEntryLines));
                index = 0;
                currentEntryLines = [];
            }
        }

        return entries;
    }
}