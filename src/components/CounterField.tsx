import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const CounterField = () => {
  const { count, maxCount, minCount, settings } = useSelector(
    (state: RootState) => state.counter
  );

  const isError = minCount < 0 || minCount >= maxCount || minCount === maxCount;
  const textColor = isError || count === maxCount ? "red" : "#1babdb";
  const displayText = isError
    ? "Incorrect value!"
    : settings
    ? "Enter values and press 'set'"
    : count;

  return (
    <CounterFieldStyled style={{ color: textColor }}>
      {displayText}
    </CounterFieldStyled>
  );
};

const CounterFieldStyled = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid #1babdb;
`;
