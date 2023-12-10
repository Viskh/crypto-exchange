import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGet } from "api/api";

import {
  CurrencyType,
  DirectionType,
  EstimatedExchangeAmount,
  Flow,
  MinimalExchangeAmount,
} from "./types";

type GetCurrenciesParams = {
  active: boolean;
  flow: Flow;
  buy: boolean;
  sell: boolean;
};

export const getCurrenciesAsync = createAsyncThunk(
  "currencies/get",
  async (params: Partial<GetCurrenciesParams>) => {
    const { data } = await apiGet<CurrencyType[]>("currencies", {
      params,
    });

    return data;
  },
);

type GetMinimalExchangeAmountParams = {
  fromCurrency: string;
  toCurrency: string;
  fromNetwork?: string;
  toNetwork?: string;
  flow?: Flow;
};

export const getMinimalExchangeAmountAsync = createAsyncThunk(
  "minimal-exchange/get",
  async (params: GetMinimalExchangeAmountParams) => {
    const { data } = await apiGet<MinimalExchangeAmount | null>("min-amount", {
      params,
    });

    return data;
  },
);

type GetEstimatedExchangeAmountParams = {
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  toAmount?: number;
  fromNetwork?: string;
  toNetwork?: string;
  flow?: Flow;
  type?: DirectionType;
  useRateId?: boolean;
  isTopUp?: boolean;
};

export const getEstimatedExchangeAmountAsync = createAsyncThunk(
  "estimated-exchange/get",
  async (params: GetEstimatedExchangeAmountParams) => {
    const { data } = await apiGet<EstimatedExchangeAmount | null>(
      "estimated-amount",
      {
        params,
      },
    );

    return data;
  },
);
