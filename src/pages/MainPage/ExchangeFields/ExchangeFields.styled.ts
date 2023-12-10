import { Input } from "components/Input";
import styled from "styled-components";
import { SGapContainer } from "styles/GapContainer.styled";

export const StyledExchangeFields = styled(SGapContainer)`
  @media (max-width: 660px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
  }
`;

export const SInput = styled(Input)`
  max-width: 440px;
  width: 100%;
  height: 50px;

  @media (max-width: 660px) {
    max-width: 100%;
  }
`;

export const SIcon = styled.div`
  width: 24px;
  height: 24px;

  @media (max-width: 660px) {
    transform: rotate(90deg);
  }
`;
