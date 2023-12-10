import ArrowIcon from "images/arrow.svg";

import { SButton, SContainer, SCurrency } from "./SelectedCurrency.styled";
import { SCurrencyImg, SCurrencyTicker } from "../InputDropdown.styled";

import { DropdownItem } from "../types";

export type SelectedCurrencyProps<T extends DropdownItem> = {
  onOpen: () => void;
  selectedItem: T | null;
};

export const SelectedCurrency = <T extends DropdownItem>({
  onOpen,
  selectedItem,
}: SelectedCurrencyProps<T>) => {
  return (
    <SContainer onClick={onOpen}>
      <SCurrency>
        {selectedItem && (
          <SCurrencyImg src={selectedItem.image} alt={selectedItem.name} />
        )}

        {selectedItem && (
          <SCurrencyTicker>{selectedItem.ticker}</SCurrencyTicker>
        )}
      </SCurrency>

      <SButton>
        <ArrowIcon />
      </SButton>
    </SContainer>
  );
};
