import styled from "styled-components";

export type SInputProps = {
  fontSize?: number;
};

export const SInput = styled.input<SInputProps>`
  font-size: ${({ fontSize = 14 }) => fontSize}px;
  background-color: #f6f7f8;
  border: 1px solid #e3ebef;
  border-radius: 5px;
  outline: unset;
  padding: 0 8px;
`;

export const SContainer = styled.div<SInputProps>`
  position: relative;
  text-align: start;
  width: 100%;
`;

export const SLabel = styled.label`
  position: absolute;
  top: -25px;
  font-size: 16px;
  font-weight: 300;
`;
