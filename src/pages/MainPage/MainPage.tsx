import { SGapContainer } from "styles/GapContainer.styled";

import { ExchangeFields } from "./ExchangeFields";
import { SContainer, SMainPage, SSubTitle, STitle } from "./MainPage.styled";
import { SubmissionForm } from "./SubmissionForm";

export const MainPage = () => {
  return (
    <SMainPage>
      <SContainer gap={60} width={960}>
        <SGapContainer gap={15}>
          <STitle>Currency Exchange</STitle>

          <SSubTitle>Exchange fast and easy</SSubTitle>
        </SGapContainer>

        <ExchangeFields />

        <SubmissionForm />
      </SContainer>
    </SMainPage>
  );
};
