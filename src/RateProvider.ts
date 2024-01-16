import { Currency, StockType } from "./Wallet";

export interface RateProvider {
  rate(stockType: StockType, targetCurrency: Currency): number;
}
