import { InputHTMLAttributes } from "react";

import { SContainer, SInput, SInputProps, SLabel } from "./Input.styled";

type InputProps = { label?: string } & SInputProps &
  InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <SContainer>
      {label && <SLabel>{label}</SLabel>}

      <SInput {...props} />
    </SContainer>
  );
};
