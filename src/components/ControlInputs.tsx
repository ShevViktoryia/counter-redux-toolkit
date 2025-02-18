import styled from "styled-components";
import { ControlInput } from "./ControlInput";

type ControlInputsType = {
  maxCount: number;
  minCount: number;
  changeMinCount: (newCount: number) => void;
  changeMaxCount: (newCount: number) => void;
};

export const ControlInputs = (props: ControlInputsType) => {
  return (
    <ControlInputsStyled>
      <ControlInput
        title="max"
        value={props.maxCount}
        changeCount={props.changeMaxCount}
        maxCount={props.maxCount}
        minCount={props.minCount}
      />
      <ControlInput
        title="min"
        value={props.minCount}
        changeCount={props.changeMinCount}
        maxCount={props.maxCount}
        minCount={props.minCount}
      />
    </ControlInputsStyled>
  );
};

const ControlInputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #1babdb;
  padding: 10px;
  border-radius: 10px;
`;
