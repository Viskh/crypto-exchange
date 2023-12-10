import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const selectCurrencies = ({ currenciesReducer }: RootState) =>
  currenciesReducer.currencies;

export const selectLoading = ({ currenciesReducer }: RootState) =>
  currenciesReducer.loading;

export const selectError = ({ currenciesReducer }: RootState) =>
  currenciesReducer.error;

export const selectFromCurrency = ({ currenciesReducer }: RootState) =>
  currenciesReducer.fromCurrency;

export const selectToCurrency = ({ currenciesReducer }: RootState) =>
  currenciesReducer.toCurrency;

export const selectMinimalAmount = ({ currenciesReducer }: RootState) =>
  currenciesReducer.minimalAmount;

export const selectEstimatedAmount = ({ currenciesReducer }: RootState) =>
  currenciesReducer.estimatedAmount;

export const selectFixedMinimalAmount = ({ currenciesReducer }: RootState) =>
  currenciesReducer.fixedMinimumAmount;

export const selectFilteredCurrencies = (
  value: string,
  side: "fromCurrency" | "toCurrency",
) =>
  createSelector(
    selectCurrencies,
    selectFromCurrency,
    selectToCurrency,
    (currencies, fromCurrency, toCurrency) => {
      const selectedCurrency =
        side === "fromCurrency" ? toCurrency : fromCurrency;

      const lowerCaseValue = value.toLowerCase();

      return currencies.filter(({ name, ticker }) => {
        const lowerCaseName = name.toLowerCase();
        const lowerCaseTicker = ticker.toLowerCase();

        return (
          (lowerCaseName.includes(lowerCaseValue) ||
            lowerCaseTicker.includes(lowerCaseValue)) &&
          name !== selectedCurrency?.name
        );
      });
    },
  );
