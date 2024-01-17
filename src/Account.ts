export interface DateProvider {
  currentDateAsString(): string;
}

interface Statement {
  date: string;
  amount: string;
  balance: number;
}

export class Account {
  static STATEMENTS_HEADER: string = "Date Amount Balance";
  static NEW_LINE = "\n";

  #dateProvider: DateProvider;
  #statements: Array<Statement> = [];
  #balance: number = 0;

  constructor(dateProvider: DateProvider) {
    this.#dateProvider = dateProvider;
  }

  printStatements(): string {
    return this.formatStatements();
  }

  deposit(amount: number): void {
    this.updateBalanceWithDeposit(amount);
    this.addStatementWithDeposit(amount);
  }

  withdraw(amount: number): void {
    this.ensureCanWithdraw(amount);
    this.updateBalanceWithWithdraw(amount);
    this.addStatementWithWithdraw(amount);
  }

  private ensureCanWithdraw(amount: number): void {
    if (this.#balance - amount < 0)
      throw new Error("Operation failed: insufficient");
  }

  private formatStatements() {
    let result = Account.STATEMENTS_HEADER;
    for (let statement of this.#statements) {
      result += Account.NEW_LINE;
      result += this.formatOneStatement(statement);
    }
    return result;
  }

  private formatOneStatement(statement: Statement) {
    return `${statement.date} ${statement.amount} ${statement.balance}`;
  }

  private updateBalanceWithDeposit(amount: number) {
    this.#balance += amount;
  }

  private updateBalanceWithWithdraw(amount: number) {
    this.#balance -= amount;
  }

  private addStatementWithDeposit(amount: number) {
    this.addStatement("+", amount);
  }

  private addStatementWithWithdraw(amount: number) {
    this.addStatement("-", amount);
  }

  private addStatement(sign: string, amount: number) {
    this.#statements.push({
      date: this.#dateProvider.currentDateAsString(),
      amount: `${sign}${amount}`,
      balance: this.#balance,
    });
  }
}
