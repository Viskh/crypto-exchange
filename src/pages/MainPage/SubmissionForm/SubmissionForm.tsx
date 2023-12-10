import { useAppSelector } from "store";

import {
  SButton,
  SButtonContainer,
  SError,
  SInput,
  SSubmissionForm,
} from "./SubmissionForm.styled";
import { selectError, selectToCurrency } from "../selectors";

export const SubmissionForm = () => {
  const error = useAppSelector(selectError);
  const toCurrency = useAppSelector(selectToCurrency);

  const currencyName = toCurrency?.name || "";

  return (
    <SSubmissionForm row="row" align="center" gap={30}>
      <SInput
        fontSize={16}
        type="text"
        label={currencyName && `Your ${currencyName} address`}
      />

      <SButtonContainer>
        <SButton text="EXCHANGE" width={200} disabled />

        {error && <SError>{error}</SError>}
      </SButtonContainer>
    </SSubmissionForm>
  );
};
