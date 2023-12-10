import SwapIcon from "images/swap.svg";

import { SIcon, StyledExchangeFields } from "./ExchangeFields.styled";
import { FromCurrency } from "./FromCurrency";
import { ToCurrency } from "./ToCurrency";

export const ExchangeFields = () => {
  return (
    <StyledExchangeFields gap={30} row="row" align="center">
      <FromCurrency />

      <SIcon>
        <SwapIcon />
      </SIcon>

      <ToCurrency />
    </StyledExchangeFields>
  );
};
