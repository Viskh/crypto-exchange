import styled from "styled-components";

export type SInputProps = {
  fontSize?: number;
};

export const SInput = styled.input`
  width: 60%;
  height: 60%;
  font-size: 16px;
  padding: 0 5px;
  background-color: inherit;
  border: none;
  border-right: 1px solid #e3ebef;
  outline: unset;
`;

export const SContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #f6f7f8;
`;

export const SCurrencyField = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #e3ebef;
  border-radius: 5px;
`;

export const SCurrencyImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SCurrencyTicker = styled.span`
  text-transform: uppercase;
  color: #282828;
`;

export const SCurrencyName = styled.span`
  color: #80a2b6;
`;
