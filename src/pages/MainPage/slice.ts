import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  getCurrenciesAsync,
  getEstimatedExchangeAmountAsync,
  getMinimalExchangeAmountAsync,
} from "./thunks";

import { CurrencyType } from "./types";

type InitialState = {
  loading: boolean;
  currencies: CurrencyType[];
  fromCurrency: CurrencyType | null;
  toCurrency: CurrencyType | null;
  fixedMinimumAmount: string;
  minimalAmount: string;
  estimatedAmount: string;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  currencies: [],
  fromCurrency: null,
  toCurrency: null,
  minimalAmount: "",
  estimatedAmount: "",
  fixedMinimumAmount: "",
  error: "",
};

const slice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setFromCurrency: (
      state,
      { payload }: PayloadAction<InitialState["fromCurrency"]>,
    ) => {
      state.fromCurrency = payload;
    },

    setToCurrency: (
      state,
      { payload }: PayloadAction<InitialState["toCurrency"]>,
    ) => {
      state.toCurrency = payload;
    },

    setMinimalAmount: (
      state,
      { payload }: PayloadAction<InitialState["minimalAmount"]>,
    ) => {
      state.minimalAmount = payload;
    },

    setEstimatedAmount: (
      state,
      { payload }: PayloadAction<InitialState["estimatedAmount"]>,
    ) => {
      state.estimatedAmount = payload;
    },

    resetCurrencies: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(getCurrenciesAsync.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCurrenciesAsync.fulfilled, (state, { payload }) => {
      if (payload) {
        state.currencies = payload;
      }
      state.loading = false;
    });

    builder.addCase(getCurrenciesAsync.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(
      getMinimalExchangeAmountAsync.fulfilled,
      (state, { payload }) => {
        if (payload) {
          const { minAmount } = payload;

          state.minimalAmount = minAmount.toString();
          state.fixedMinimumAmount = minAmount.toString();
        } else {
          state.error = "this pair is disabled now";
        }
      },
    );

    builder.addCase(
      getEstimatedExchangeAmountAsync.fulfilled,
      (state, { payload }) => {
        if (payload) {
          const { toAmount } = payload;

          state.estimatedAmount = toAmount.toString();
        } else {
          state.error = "this pair is disabled now";
        }
      },
    );
  },
});

export const currenciesReducer = slice.reducer;

export const {
  setFromCurrency,
  setToCurrency,
  setEstimatedAmount,
  setMinimalAmount,
  resetCurrencies,
} = slice.actions;
