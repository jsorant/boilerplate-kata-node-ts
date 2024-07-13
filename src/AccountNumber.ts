export class AccountNumber {
    constructor(readonly value: string) {

    }

    static of(value: string) {
        return new AccountNumber(value);
    }
}