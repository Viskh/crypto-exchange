import styled from "styled-components";

type SGapContainerProps = {
  gap?: number;
  width?: number | "auto";
  height?: number | "auto";
  row?: "column" | "row";
  align?: "center" | "start" | "end" | "unset";
};

export const SGapContainer = styled.div<SGapContainerProps>`
  width: ${({ width = "auto" }) =>
    typeof width === "number" ? width + "px" : width};

  height: ${({ height = "auto" }) =>
    typeof height === "number" ? height + "px" : height};

  display: flex;

  flex-direction: ${({ row = "column" }) => row};

  align-items: ${({ align = "unset" }) =>
    align === "center" || align === "unset" ? align : "flex-" + align};

  gap: ${({ gap = 0 }) => gap}px;
`;
