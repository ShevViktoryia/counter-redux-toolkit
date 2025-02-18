import styled from "styled-components";

type ControlInputType = {
  title: string;
  value: number;
  maxCount: number;
  minCount: number;
  changeCount: (newCount: number) => void;
};

export const ControlInput = (props: ControlInputType) => {
  return (
    <ControlInputStyled>
      <p>{props.title + " value"}: </p>
      <input
        type="number"
        value={props.value}
        onChange={(e) => props.changeCount(Number(e.currentTarget.value))}
        style={{
          background:
            props.minCount === props.maxCount ||
            props.minCount > props.maxCount ||
            props.minCount < 0 ||
            props.maxCount < 0
              ? "red"
              : "white",
        }}
      />
    </ControlInputStyled>
  );
};

const ControlInputStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    border-radius: 5px;
    &:focus,
    &:focus-visible {
      outline-color: #1babdb;
    }
  }
`;
