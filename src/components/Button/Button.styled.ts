import styled from "styled-components";

export type SButtonProps = {
  width?: number;
  height?: number;
  color?: string;
  bgColor?: string;
};

export const SButton = styled.button<SButtonProps>`
  width: ${({ width = 200 }) => width}px;
  height: ${({ height = 50 }) => height}px;
  color: #ffffff;
  background-color: #11b3fe;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0095e0;
  }
`;
