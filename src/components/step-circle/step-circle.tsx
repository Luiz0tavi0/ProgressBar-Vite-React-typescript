import styled from "styled-components";

const Circle = styled.span<{ filed: boolean }>`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0;
  padding:0;
  box-sizing:border-box;
  color: ${({ theme, filed }) => (filed ? '#FFF' : theme.colors.primary)};
  background-color: ${({ theme, filed }) => (filed ? theme.colors.primary : 'transparent')};
  border: solid 1px ${({ theme }) => theme.colors.primary};

  font-size: 16px;    
  border-radius: 20px;
  height: 39px;
  width: 39px;  
`;

interface StepCircleProps {
  stepNumber: number;
  filed?: boolean;
};


const StepCircle = ({ stepNumber, filed = false }: StepCircleProps) => {
  return <Circle filed={filed}>{stepNumber}</Circle>;
};
export default StepCircle;