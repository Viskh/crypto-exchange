import { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "hooks";

import { SelectedCurrencyProps } from "./SelectedCurrency/SelectedCurrency";
import { Dropdown, DropdownProps } from "./Dropdown";
import { SContainer, SCurrencyField, SInput } from "./InputDropdown.styled";
import { SelectedCurrency } from "./SelectedCurrency";

import { DropdownItem } from "./types";

type InputDropdownProps<T extends DropdownItem> = {
  inputValue: string;
  onChangeInputValue: (value: string) => void;
  onClick?: () => void;
} & Omit<DropdownProps<T>, "onClose"> &
  Omit<SelectedCurrencyProps<T>, "onOpen">;

export const InputDropdown = <T extends DropdownItem>({
  onClick,
  onChangeInputValue,
  inputValue,
  selectedItem,
  ...props
}: InputDropdownProps<T>) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(inputValue);

  const debouncedValue = useDebounce(value, 300);

  const onToggle = () => {
    setOpen((prev) => !prev);

    if (!open) {
      onClick?.();
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onChangeInputValue(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  return (
    <SContainer>
      {open ? (
        <Dropdown onClose={onToggle} {...props} />
      ) : (
        <SCurrencyField>
          <SInput value={value} onChange={onChange} />

          <SelectedCurrency onOpen={onToggle} selectedItem={selectedItem} />
        </SCurrencyField>
      )}
    </SContainer>
  );
};
