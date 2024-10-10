import React from "react"
import styled from "styled-components";


const StepItemsContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    
`

interface StepsContainerProps {
    children: React.ReactNode;
}

const StepsContainer = ({ children }: StepsContainerProps) => {
    return (
        <StepItemsContainer>
            {children}
        </StepItemsContainer>
    )
}

export default StepsContainer;