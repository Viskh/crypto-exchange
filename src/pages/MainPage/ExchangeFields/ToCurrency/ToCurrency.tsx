import React, { useEffect, useState } from "react";
import { InputDropdown } from "components/InputDropdown";
import {
  getCurrenciesAsync,
  getEstimatedExchangeAmountAsync,
} from "pages/MainPage/thunks";
import { useAppDispatch, useAppSelector } from "store";

import {
  selectEstimatedAmount,
  selectFilteredCurrencies,
  selectFixedMinimalAmount,
  selectFromCurrency,
  selectLoading,
  selectMinimalAmount,
  selectToCurrency,
} from "../../selectors";
import { setEstimatedAmount, setToCurrency } from "../../slice";

import { CurrencyType } from "../../types";

export const ToCurrency = () => {
  const [filter, setFilter] = useState("");

  const dispatch = useAppDispatch();

  const estimatedAmount = useAppSelector(selectEstimatedAmount);
  const minimalAmount = useAppSelector(selectMinimalAmount);
  const fixedMinimalAmount = useAppSelector(selectFixedMinimalAmount);
  const isLoading = useAppSelector(selectLoading);
  const toCurrency = useAppSelector(selectToCurrency);
  const fromCurrency = useAppSelector(selectFromCurrency);
  const currencies = useAppSelector(
    selectFilteredCurrencies(filter, "toCurrency"),
  );

  const onSearch = (value: string) => {
    setFilter(value);
  };

  const onSelect = (currency: CurrencyType) => {
    dispatch(setToCurrency(currency));
  };

  const onGetCurrencies = () => {
    dispatch(
      getCurrenciesAsync({ active: true, flow: "fixed-rate", buy: true }),
    );
  };

  const onChangeEstimated = (value: string) => {
    dispatch(setEstimatedAmount(value));
  };

  useEffect(() => {
    if (minimalAmount && toCurrency !== null && fromCurrency !== null) {
      if (minimalAmount < fixedMinimalAmount) {
        dispatch(setEstimatedAmount("-"));
      } else {
        dispatch(
          getEstimatedExchangeAmountAsync({
            fromCurrency: fromCurrency.ticker,
            fromNetwork: fromCurrency.network,
            toNetwork: toCurrency.network,
            toCurrency: toCurrency.ticker,
            fromAmount: +minimalAmount,
          }),
        );
      }
    }
  }, [minimalAmount]);

  return (
    <InputDropdown
      inputValue={estimatedAmount}
      onChangeInputValue={onChangeEstimated}
      items={currencies}
      onClick={onGetCurrencies}
      isLoading={isLoading}
      onSelect={onSelect}
      onSearch={onSearch}
      selectedItem={toCurrency}
    />
  );
};
