import {open} from "node:fs/promises";
import {Entry} from "./Entry";

export class AccountNumbersFileParser {
    static async parse(filePath: string) {
        const lines = await this.readLinesOf(filePath);
        return this.extractEntriesFrom(lines).map(entry => entry.toAccountNumber());
    }

    private static async readLinesOf(filePath: string) {
        const file = await open(filePath);
        const lines = [];
        for await (const line of file.readLines()) {
            lines.push(line);
        }
        return lines;
    }

    private static extractEntriesFrom(lines: string[]) {
        const entries: Entry[] = [];
        let currentEntryLines: string[] = [];
        let index = 0;
        for (const line of lines) {
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