import {describe, it, expect} from "vitest";
import {AccountNumber, AccountNumberState} from "./AccountNumber";

describe("AccountNumber", () => {
    const VALID_ACCOUNT_NUMBER = AccountNumber.of("345882865");
    const ACCOUNT_NUMBER_WITH_WRONG_CHECKSUM = AccountNumber.of("345882864");

    it("should make a valid AccountNumber", () => {
        expect(VALID_ACCOUNT_NUMBER.state).toEqual(AccountNumberState.VALID);
    });

    it("should make an invalid AccountNumber", () => {
        expect(ACCOUNT_NUMBER_WITH_WRONG_CHECKSUM.state).toEqual(AccountNumberState.WRONG_CHECKSUM);
    });
})