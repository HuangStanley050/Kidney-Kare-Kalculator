import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Step2 = props => {
  return (
    <div>
      <h2>Step {props.currentStep}</h2>
      <Form>
        <FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Do you drink alcohol?</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              Do you feel more tired and have less energy?
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <Label for="exampleEmail">Do you have trouble concentrating?</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Do you have poor appetite</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
      </Form>
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
