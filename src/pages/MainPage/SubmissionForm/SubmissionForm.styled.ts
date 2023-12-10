import { Button } from "components/Button/Button";
import { Input } from "components/Input";
import styled from "styled-components";
import { SGapContainer } from "styles/GapContainer.styled";

export const SSubmissionForm = styled(SGapContainer)`
  @media (max-width: 660px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const SInput = styled(Input)`
  max-width: 730px;
  width: 100%;
  height: 50px;

  @media (max-width: 660px) {
    max-width: 100%;
  }
`;

export const SButtonContainer = styled.div`
  max-width: 200px;
  width: 100%;
  position: relative;

  @media (max-width: 660px) {
    max-width: 100%;
  }
`;

export const SButton = styled(Button)`
  width: 100%;
`;

export const SError = styled.span`
  color: #e03f3f;
  position: absolute;
  top: 50px;
  left: 0;
`;
