import {describe, it, expect} from "vitest";
import {AccountNumber, AccountNumberState} from "./AccountNumber";

describe("AccountNumber", () => {
    const VALID_ACCOUNT_NUMBER = AccountNumber.of("457508000");
    const ACCOUNT_NUMBER_WITH_WRONG_CHECKSUM = AccountNumber.of("664371495");
    const ACCOUNT_NUMBER_WITH_ILLEGIBLE_NUMBERS = AccountNumber.of("86110??36");

    it("should make a valid AccountNumber", () => {
        expect(VALID_ACCOUNT_NUMBER.state).toEqual(AccountNumberState.VALID);
    });

    it("should make an invalid AccountNumber", () => {
        expect(ACCOUNT_NUMBER_WITH_WRONG_CHECKSUM.state).toEqual(AccountNumberState.WRONG_CHECKSUM);
    });

    it("should make an AccountNumber with illegible numbers", () => {
        expect(ACCOUNT_NUMBER_WITH_ILLEGIBLE_NUMBERS.state).toEqual(AccountNumberState.HAS_ILLEGIBLE_NUMBERS);
    });
})