import styled from "styled-components";

type SLoaderProps = {
  size?: number;
};

export const SLoader = styled.span<SLoaderProps>`
  width: ${({ size = 32 }) => size}px;
  height: ${({ size = 32 }) => size}px;
  border: 5px solid #e3ebef;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
