import styled from "styled-components";
import { SGapContainer } from "styles/GapContainer.styled";

export const SMainPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SContainer = styled(SGapContainer)`
  margin: 15px;
`;

export const STitle = styled.h1`
  font-size: 50px;
  font-weight: 300;

  @media (max-width: 660px) {
    font-size: 40px;
  }
`;

export const SSubTitle = styled(STitle)`
  font-size: 20px;
`;
