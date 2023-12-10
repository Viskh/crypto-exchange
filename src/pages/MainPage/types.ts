export type CurrencyType = {
  featured: boolean;
  hasExternalId: boolean;
  image: string;
  isFiat: boolean;
  isStable: boolean;
  name: string;
  supportsFixedRate: boolean;
  ticker: string;
  network: string;
  tokenContract: string | null;
  buy: boolean;
  sell: boolean;
  legacyTicker: string;
};

export type Flow = "standard" | "fixed-rate";

export type DirectionType = "direct" | "reverse";

export type MinimalExchangeAmount = {
  fromCurrency: string;
  fromNetwork: string;
  toCurrency: string;
  toNetwork: string;
  flow: Flow;
  minAmount: number;
};

export type EstimatedExchangeAmount = {
  fromCurrency: string;
  fromNetwork: string;
  toCurrency: string;
  toNetwork: string;
  flow: Flow;
  type: DirectionType;
  rateId: string | null;
  validUntil: string | null;
  transactionSpeedForecast: string | null;
  warningMessage: string | null;
  depositFee: number;
  withdrawalFee: number;
  userId: number | null;
  fromAmount: number;
  toAmount: number;
};
