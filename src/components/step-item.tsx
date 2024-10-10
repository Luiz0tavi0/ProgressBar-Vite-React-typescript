import styled from "styled-components";
import StepCircle from "./step-circle/step-circle";
import { forwardRef } from "react";


const StepItemContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;  
  text-overflow: ellipsis;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  min-width: 98px;
  width: auto;
  padding-bottom: 4px;
`
const StepItemName = styled.h2 <{ done?: boolean }>`
  font-weight:${(props) => (props.done ? '600' : '300')};
  box-sizing: border-box;
  margin: 0;
  padding: 0px;
  font-optical-sizing: auto;
  font-style: normal;
  text-align: center;
  width: 100%;
  font-size: 18px;
  height: 22px;
`;
interface StepItemProps {
  step: { id: number; name: string; done?: boolean }
}
const StepItem = forwardRef<HTMLDivElement, StepItemProps>(({ step }, ref) => {
  return (
    <StepItemContainer ref={ref} key={step.id}>
      <StepCircle stepNumber={Number(step.id)} filed={step?.done} />
      <StepItemName done={step.done}>{step.name}</StepItemName>
    </StepItemContainer>
  );
});

export default StepItem;
