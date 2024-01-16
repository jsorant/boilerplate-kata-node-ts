import { RateProvider } from "./RateProvider";

export enum StockType {
  Euros,
  Dollars,
}

export enum Currency {
  Euro,
  Dollar,
}

interface Stock {
  type: StockType;
  amount: number;
}

export class Wallet {
  #rateProvider: RateProvider;
  #stocks: Array<Stock> = [];

  constructor(rateProvider: RateProvider) {
    this.#rateProvider = rateProvider;
  }

  value(currency: Currency): number {
    let result = 0;
    for (const stock of this.#stocks) {
      result += this.#rateProvider.rate(stock.type, currency) * stock.amount;
    }
    return result;
  }

  addStock(type: StockType, amount: number) {
    this.#stocks.push({ type, amount });
  }
}
