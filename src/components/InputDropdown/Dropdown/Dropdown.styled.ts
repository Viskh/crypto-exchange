import styled from "styled-components";

export const SContainer = styled.div`
  max-width: 440px;
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SSearch = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  display: flex;
  align-items: center;
  border: 1px solid #e3ebef;
  border-radius: 5px 5px 0 0;
`;

export const SSearchInput = styled.input`
  flex-grow: 1;
  height: 100%;
  font-size: 16px;
  background-color: inherit;
  border: none;
  outline: unset;
  padding: 0 8px;

  &::placeholder {
    color: #80a2b6;
  }
`;

export const SButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SCurrencyList = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  min-height: 50px;
  max-height: 250px;
  overflow-y: auto;
  background-color: #f6f7f8;
  border: 1px solid #e3ebef;
  border-top: none;
  border-radius: 0 0 5px 5px;
  z-index: 1000;
`;

export const SCurrencyItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 16px;
  gap: 10px;

  &:hover {
    background-color: #eaf1f7;
  }
`;
