import {open} from "node:fs/promises";
import {AccountNumberParser} from "./AccountNumberParser";

export class AccountNumbersFileParser {
    static async parse(filePath: string) {
        const lines = await this.readLinesOf(filePath);
        const entries = this.extractEntriesFrom(lines);
        return entries.map(entry => AccountNumberParser.toAccountNumber(entry));
    }

    //TODO class Entry
    private static async readLinesOf(filePath: string) {
        const file = await open(filePath);
        const lines = [];
        for await (const line of file.readLines()) {
            lines.push(line);
        }
        return lines;
    }

    private static extractEntriesFrom(lines: string[]) {
        const entries: string[][] = [];
        let currentEntry: string[] = [];
        let index = 0;
        lines.forEach(line => {
            currentEntry.push(line);
            index++;
            if (index === 4) {
                entries.push(currentEntry);
                index = 0;
                currentEntry = [];
            }
        });
        return entries;
    }
}