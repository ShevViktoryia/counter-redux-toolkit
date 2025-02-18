import styled from "styled-components";
import { ControlInputs } from "./ControlInputs";
import { ControlButtonsStyled } from "./ControlButtons";
import { Button } from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setMinMax, toggleSettings } from "../app/store";

export const ControlCounter = () => {
  const dispatch = useDispatch();
  const { minCount, maxCount, settings } = useSelector(
    (state: RootState) => state.counter
  );

  const setMinMaxHandler = () => {
    dispatch(setMinMax(minCount, maxCount));
    localStorage.setItem("min value", JSON.stringify(minCount));
    localStorage.setItem("max value", JSON.stringify(maxCount));
    dispatch(toggleSettings());
  };

  return (
    <CounterStyled>
      <ControlInputs
        maxCount={maxCount}
        minCount={minCount}
        changeMaxCount={(n) => dispatch(setMinMax(minCount, n))}
        changeMinCount={(n) => dispatch(setMinMax(n, maxCount))}
      />
      <ControlButtonsStyled>
        <Button
          title="set"
          onClick={setMinMaxHandler}
          isDisable={
            !settings ||
            minCount === maxCount ||
            minCount > maxCount ||
            minCount < 0 ||
            maxCount < 0
          }
        />
      </ControlButtonsStyled>
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
