import styled from "styled-components";
import { CounterField } from "./CounterField";
import { ProgressBar } from "./ProgressBar";
import { ControlButtons } from "./ControlButtons";

export const Counter = () => {
  return (
    <CounterStyled>
      <CounterField />
      <ProgressBar />
      <ControlButtons />
    </CounterStyled>
  );
};

const CounterStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 2px solid #1babdb;
  padding: 10px;
  border-radius: 10px;
`;
