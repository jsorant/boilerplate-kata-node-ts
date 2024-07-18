export enum AccountNumberState {
    VALID = 'VALID',
    WRONG_CHECKSUM = 'WRONG_CHECKSUM'
}

export class AccountNumber {
    readonly state: AccountNumberState;

    private constructor(readonly value: string) {
        this.state = this.isChecksumValid() ? AccountNumberState.VALID : AccountNumberState.WRONG_CHECKSUM;
    }

    static of(value: string) {
        return new AccountNumber(value);
    }

    private isChecksumValid() {
        // Formula:
        // account number:  3  4  5  8  8  2  8  6  5
        // position names:  d9 d8 d7 d6 d5 d4 d3 d2 d1
        // checksum calculation: (d1+2*d2+3*d3+...+9*d9) mod 11 = 0

        const sum = this.value.split("")
            .map(character => Number.parseInt(character))
            .reverse()
            .map((digit, index) => {
                return digit * (index + 1);
            })
            .reduce((acc, val) => acc + val, 0);
        return sum % 11 === 0;
    }
}