import { describe, expect, test, beforeEach } from "vitest";
import { mock } from "vitest-mock-extended";
import { RateProvider } from "./RateProvider";
import { Currency, StockType, Wallet } from "./Wallet";

describe("Wallet", () => {
  const rateProvider = buildRateProviderMock();
  let wallet: Wallet;

  beforeEach(() => {
    wallet = new Wallet(rateProvider);
  });

  test("should get the value of a wallet that contains euro stocks in euros", () => {
    wallet.addStock(StockType.Euros, 15);

    expect(wallet.value(Currency.Euro)).toBe(15);
  });

  test("should get the value of a wallet that contains multiple euro stocks in euros", () => {
    wallet.addStock(StockType.Euros, 15);
    wallet.addStock(StockType.Euros, 15);

    expect(wallet.value(Currency.Euro)).toBe(30);
  });

  test("should get the value of a wallet that contains euro stocks in dollars", () => {
    wallet.addStock(StockType.Euros, 15);

    expect(wallet.value(Currency.Dollar)).toBe(30);
  });

  test("should get the value of a wallet that contains multiple euro stocks in dollars", () => {
    wallet.addStock(StockType.Euros, 15);
    wallet.addStock(StockType.Euros, 15);

    expect(wallet.value(Currency.Dollar)).toBe(60);
  });

  test("should get the value of a wallet that contains euro stocks and dollar stocks in dollars", () => {
    wallet.addStock(StockType.Euros, 15);
    wallet.addStock(StockType.Dollars, 15);

    expect(wallet.value(Currency.Dollar)).toBe(45);
  });

  test("should get the value of a wallet that contains euro stocks and dollar stocks in euros", () => {
    wallet.addStock(StockType.Euros, 15);
    wallet.addStock(StockType.Dollars, 15);

    expect(wallet.value(Currency.Euro)).toBe(22.5);
  });

  function buildRateProviderMock() {
    const rateProvider = mock<RateProvider>();
    rateProvider.rate.mockImplementation(
      (stockType: StockType, targetCurrency: Currency): number => {
        if (stockType === StockType.Euros && targetCurrency === Currency.Dollar)
          return 2;
        if (stockType === StockType.Dollars && targetCurrency === Currency.Euro)
          return 0.5;
        return 1;
      }
    );
    return rateProvider;
  }
});
