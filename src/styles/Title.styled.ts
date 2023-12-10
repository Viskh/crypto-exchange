import styled from "styled-components";

type STitleProps = {
  size?: number;
  color?: string;
  fontWeight?: number;
};

export const STitle = styled.h1<STitleProps>`
  font-size: ${({ size = 14 }) => size}px;
  color: ${({ color = "#000000" }) => color};
  font-weight: ${({ fontWeight = 400 }) => fontWeight};
`;
