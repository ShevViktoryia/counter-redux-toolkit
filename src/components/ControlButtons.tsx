import styled from "styled-components";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset, RootState, toggleSettings } from "../app/store";

export const ControlButtons = () => {
  const dispatch = useDispatch();
  const { count, maxCount, minCount, readyForWork } = useSelector(
    (state: RootState) => state.counter
  );
  return (
    <ControlButtonsStyled>
      <Button
        title="increase"
        onClick={() => dispatch(increment())}
        isDisable={count === maxCount || readyForWork === false}
      />
      <Button
        title="reset"
        isDisable={count === minCount}
        onClick={() => dispatch(reset())}
      />
      <Button title="set" onClick={() => dispatch(toggleSettings())} />
    </ControlButtonsStyled>
  );
};

export const ControlButtonsStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #1babdb;
`;
