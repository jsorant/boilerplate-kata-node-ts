import { expect, test, describe, beforeEach } from "vitest";
import { Account, DateProvider } from "./Account";
import { mock, mockReset } from "vitest-mock-extended";

describe("Account", () => {
  let account: Account;
  const dateProvider = mock<DateProvider>();

  beforeEach(() => {
    mockReset(dateProvider);
    dateProvider.currentDateAsString.mockReturnValue("24.12.2015");
    account = new Account(dateProvider);
  });

  test("should return no statements for a new account", () => {
    expect(account.printStatements()).toBe("Date Amount Balance");
  });

  test("should return one statement for an account with one deposit", () => {
    account.deposit(500);

    expect(account.printStatements()).toBe(
      `Date Amount Balance
24.12.2015 +500 500`
    );
  });

  test("should return two statements for an account with two deposits", () => {
    account.deposit(500);
    account.deposit(100);

    expect(account.printStatements()).toBe(
      `Date Amount Balance
24.12.2015 +500 500
24.12.2015 +100 600`
    );
  });

  test("should return two statements for an account with one deposit and one withdraw", () => {
    account.deposit(500);
    account.withdraw(100);

    expect(account.printStatements()).toBe(
      `Date Amount Balance
24.12.2015 +500 500
24.12.2015 -100 400`
    );
  });

  test("should handle dates", () => {
    dateProvider.currentDateAsString.mockReturnValueOnce("24.12.2015");
    dateProvider.currentDateAsString.mockReturnValueOnce("25.12.2015");

    account.deposit(500);
    account.deposit(100);

    expect(account.printStatements()).toBe(
      `Date Amount Balance
24.12.2015 +500 500
25.12.2015 +100 600`
    );
  });

  test("should not withdraw if balance is insufficient", () => {
    account.deposit(500);

    expect(() => account.withdraw(1000)).toThrowError("insufficient");
  });
});
