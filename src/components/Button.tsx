import styled from "styled-components";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  isDisable?: boolean;
};

export const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled onClick={props.onClick} disabled={props.isDisable}>
      {props.title}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: #1babdb;
  border: 2px solid #1babdb;
  color: azure;
  padding: 10px 20px;
  border-radius: 10px;
  &:disabled {
    border: 1px solid #3d6d7e;
    background-color: #3d6d7e;
    color: #222222;
  }
`;
