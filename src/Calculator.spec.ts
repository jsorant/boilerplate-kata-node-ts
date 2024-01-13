import { expect } from "chai";
import bigDecimal from "js-big-decimal";

describe("Wallet", () => {
  it("should return wallet value in Euros for a wallet with only Euros stocks", () => {
    const rateProvider = new DummyRateProvider();
    const wallet = new Wallet(rateProvider);
    wallet.addStock(StockType.Euro, 15);
    expect(wallet.value(Currency.EUR)).to.equal(15);

    wallet.addStock(StockType.Euro, 15);
    expect(wallet.value(Currency.EUR)).to.equal(30);
  });

  it("should return wallet value in Dollars for a wallet with only Euros stocks", () => {
    const rateProvider = new DummyRateProvider();
    const wallet = new Wallet(rateProvider);
    wallet.addStock(StockType.Euro, 15);
    expect(wallet.value(Currency.DOL)).to.equal(30);
  });

  it("should return wallet value with precision", () => {
    const rateProvider = new DummyRateProvider();
    const wallet = new Wallet(rateProvider);
    wallet.addStock(StockType.Euro, 15);
    expect(wallet.value(Currency.BTC)).to.equal(0.000015);
  });

  it("should return wallet value in Dollars for a wallet with Euros and Dollars stocks", () => {
    const rateProvider = new DummyRateProvider();
    const wallet = new Wallet(rateProvider);
    wallet.addStock(StockType.Euro, 15);
    wallet.addStock(StockType.Dollar, 15);
    expect(wallet.value(Currency.DOL)).to.equal(45);
  });
});

interface RateProvider {
  rate(from: StockType, to: Currency): number;
}

class DummyRateProvider implements RateProvider {
  rate(from: StockType, to: Currency): number {
    if (from === StockType.Euro) {
      if (to === Currency.DOL) return 2;
      if (to === Currency.BTC) return 0.000001;
    }
    return 1;
  }
}

enum StockType {
  Euro,
  Dollar,
}

enum Currency {
  EUR,
  DOL,
  BTC,
}

interface Stock {
  type: StockType;
  amount: number;
}

class Wallet {
  private stocks: Array<Stock> = [];

  constructor(private readonly rateProvider: RateProvider) {}

  addStock(type: StockType, amount: number) {
    this.stocks.push({ type, amount });
  }

  value(currency: Currency): number {
    return this.convertStocksToCurrency(currency);
  }

  private convertStocksToCurrency(currency: Currency): number {
    return this.stocks.reduce(
      (walletValue, currentStock) =>
        (walletValue += this.convertStockToCurrency(currentStock, currency)),
      0
    );
  }

  private convertStockToCurrency(stock: Stock, currency: Currency): number {
    const rate = this.rateProvider.rate(stock.type, currency);
    return this.multiplyBigNumbers(stock.amount, rate);
  }

  private multiplyBigNumbers(a: number, b: number): number {
    return Number.parseFloat(
      new bigDecimal(a).multiply(new bigDecimal(b)).getValue()
    );
  }
}
