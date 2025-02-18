import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../app/store";

export const ProgressBar = () => {
  const { count, maxCount } = useSelector((state: RootState) => state.counter);
  return (
    <ProgressBarStyled>
      <ProgressInnerStyled $count={count} $maxCount={maxCount} />
    </ProgressBarStyled>
  );
};

const ProgressBarStyled = styled.div`
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  background: #e0e0e0;
`;

const ProgressInnerStyled = styled.div<{ $count: number; $maxCount: number }>`
  background: #1babdb;
  height: 20px;
  border-radius: 10px;
  width: ${(props) =>
    props.$count <= props.$maxCount
      ? (props.$count / props.$maxCount) * 100
      : props.$count}%;
`;
