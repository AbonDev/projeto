import './status.css';
import React, { useState } from "react";
import StepNavigation from '../../stepNavigation';

export const Status = () => {
    const labelArray = ['Aguardando', 'Lavando', 'Lavagem Finalizada', 'Aguardando cliente', 'Entregue']
    const [currentStep, updateCurrentStep] = useState(1);

    function updateStep(step) {
        updateCurrentStep(step);
    }

    return (
        <div className="App">
            <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
            <p>Selected Step: {currentStep}</p>
            <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Voltar Etapa</button>
            <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep + 1)}>Próxima Etapa</button>
        </div>
    )
}