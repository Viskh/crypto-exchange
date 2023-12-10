import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { SButton, SButtonProps } from "./Button.styled";

type ButtonProps = { text: ReactNode } & SButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return <SButton {...props}>{text}</SButton>;
};
