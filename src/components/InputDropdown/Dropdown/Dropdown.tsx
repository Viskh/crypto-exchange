import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { useDebounce } from "hooks";
import CloseIcon from "images/close.svg";
import { SLoader } from "styles/Loader.styled";

import {
  SButton,
  SContainer,
  SCurrencyItem,
  SCurrencyList,
  SSearch,
  SSearchInput,
} from "./Dropdown.styled";
import {
  SCurrencyImg,
  SCurrencyName,
  SCurrencyTicker,
} from "../InputDropdown.styled";

import { DropdownItem } from "../types";

export type DropdownProps<T extends DropdownItem> = {
  onClose: () => void;
  items: T[];
  isLoading?: boolean;
  onSearch?: (value: string) => void;
  onSelect: (item: T) => void;
};

export const Dropdown = <T extends DropdownItem>({
  onClose,
  items,
  isLoading,
  onSearch,
  onSelect,
}: DropdownProps<T>) => {
  const [search, setSearch] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const onSelectItem = (item: T) => () => {
    onSelect(item);

    onClose();
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  const debouncedValue = useDebounce(search);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    onSearch?.(debouncedValue);
  }, [debouncedValue]);

  return (
    <SContainer ref={dropdownRef}>
      <SSearch>
        <SSearchInput placeholder="Search" type="text" onChange={onChange} />

        <SButton onClick={onClose}>
          <CloseIcon />
        </SButton>
      </SSearch>

      <SCurrencyList>
        {isLoading ? (
          <SLoader />
        ) : (
          items.map((item, index) => (
            <SCurrencyItem
              key={`${item.name}-${index}`}
              onClick={onSelectItem(item)}
            >
              <span>
                <SCurrencyImg src={item.image} alt={item.name} />
              </span>

              <SCurrencyTicker>{item.ticker}</SCurrencyTicker>

              <SCurrencyName>{item.name}</SCurrencyName>
            </SCurrencyItem>
          ))
        )}
      </SCurrencyList>
    </SContainer>
  );
};
