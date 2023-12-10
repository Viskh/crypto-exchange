import React, { useEffect, useState } from "react";
import { InputDropdown } from "components/InputDropdown";
import { useAppDispatch, useAppSelector } from "store";

import {
  selectFilteredCurrencies,
  selectFromCurrency,
  selectLoading,
  selectMinimalAmount,
  selectToCurrency,
} from "../../selectors";
import { setFromCurrency, setMinimalAmount } from "../../slice";
import {
  getCurrenciesAsync,
  getMinimalExchangeAmountAsync,
} from "../../thunks";

import { CurrencyType } from "../../types";

export const FromCurrency = () => {
  const [filter, setFilter] = useState("");

  const dispatch = useAppDispatch();

  const minimalAmount = useAppSelector(selectMinimalAmount);
  const isLoading = useAppSelector(selectLoading);
  const fromCurrency = useAppSelector(selectFromCurrency);
  const toCurrency = useAppSelector(selectToCurrency);
  const currencies = useAppSelector(
    selectFilteredCurrencies(filter, "fromCurrency"),
  );

  const onSearch = (value: string) => {
    setFilter(value);
  };

  const onSelect = (currency: CurrencyType) => {
    dispatch(setFromCurrency(currency));
  };

  const onGetCurrencies = () => {
    dispatch(
      getCurrenciesAsync({ active: true, flow: "fixed-rate", sell: true }),
    );
  };

  const onChangeMinimal = (value: string) => {
    dispatch(setMinimalAmount(value));
  };

  useEffect(() => {
    if (toCurrency !== null && fromCurrency !== null) {
      dispatch(
        getMinimalExchangeAmountAsync({
          fromCurrency: fromCurrency.ticker,
          fromNetwork: fromCurrency.network,
          toCurrency: toCurrency.ticker,
          toNetwork: toCurrency.network,
        }),
      );
    }
  }, [toCurrency, fromCurrency]);

  return (
    <InputDropdown
      inputValue={minimalAmount}
      onChangeInputValue={onChangeMinimal}
      items={currencies}
      onClick={onGetCurrencies}
      isLoading={isLoading}
      onSearch={onSearch}
      onSelect={onSelect}
      selectedItem={fromCurrency}
    />
  );
};
