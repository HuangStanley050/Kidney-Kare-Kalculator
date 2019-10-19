import React from "react";

const Step2 = props => {
  return (
    <div>
      <h2>Step {props.currentStep}</h2>
      <p>Total Steps: {props.totalSteps}</p>
      <p>Is Active: {props.isActive}</p>

      <p>
        <button onClick={props.previousStep}>Previous Step</button>
      </p>
      <p>
        <button onClick={props.nextStep}>Next Step</button>
      </p>
    </div>
  );
};

export default Step2;
