import styled from "styled-components";
import StepsContainer from "./step-item-container";
import StepItem from "./step-item";
import { useEffect, useRef, useState } from "react";

interface ProgressbarProps {
  steps: Array<{ id: number; name: string; done?: boolean }>;
}

interface HorizontalBarProgressProps {
  color?: string;
  progress?: number;
}


const ProgressBarContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: #fff;
  height: 257px;
  width: 1013px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalBarProgress = styled.hr<HorizontalBarProgressProps>`
  height: 12px;
  margin: 0;
  background-color: ${(props) => props.color || props.theme.colors.primary};
  width: ${(props) => (props.progress !== undefined ? `${props.progress}px` : "100%")};
  border: none;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%); /* Center the progress bar vertically */
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 859px;

  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const ProgressSection = styled.section`
  margin-top: 25px;
  position: relative;
  width: 100%;
`;

const ProgressBar = ({ steps }: ProgressbarProps) => {
  const orderedSteps = steps.sort((a, b) => a.id - b.id);
  const currentStepIndex = orderedSteps.findLastIndex((step) => step.done);
  const [progressWidth, setProgressWidth] = useState<number>(0);

  // Use a single ref for the last StepItem element
  const lastStepRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (currentStepIndex !== -1 && lastStepRef.current) {

      setProgressWidth(
        (lastStepRef.current?.offsetLeft || 0) +
        (lastStepRef.current?.clientWidth || 0) / 2
      )

    }
  }, [currentStepIndex]);

  return (
    <ProgressBarContainer>
      <MainContainer>
        <StepsContainer>
          {
            orderedSteps.map((step, idx) => (
              <StepItem
                step={step}
                ref={idx === currentStepIndex ? lastStepRef : null}
              />
            ))}

        </StepsContainer>
        <ProgressSection>
          <HorizontalBarProgress color="#E0E2FC" />
          <HorizontalBarProgress progress={progressWidth} />
        </ProgressSection>
      </MainContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

