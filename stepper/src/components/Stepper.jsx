import { useState } from "react";

export default function Stepper({steps}) {

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : prevStep,
    );
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <>
      <h1>
        Step {currentStep + 1} of {steps.length}
      </h1>
      <div className="stepper">
        {steps.map((step, index) => {
          const isActive = currentStep === index;
          const isCompleted = index < currentStep;

          return (
            <span
              key={index}
              className={`step ${isActive ? "active-step" : ""}`}
            >
              {isCompleted ? "✓" : index + 1}
              {" "}
              {step}
            </span>
          );
        })}
      </div>
      <p>{steps[currentStep]}</p>
      <button onClick={handlePrevious} disabled={currentStep === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentStep === steps.length - 1}>
        Next
      </button>
    </>
  );
}
