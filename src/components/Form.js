import React from "react";
import { Row, Col } from "reactstrap";
import StepWizard from "react-step-wizard";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Form = props => {
  return (
    <div>
      <Row>
        <Col xs="12">
          <StepWizard>
            <Step1 />
            <Step2 />
          </StepWizard>
        </Col>
      </Row>
    </div>
  );
};

export default Form;
