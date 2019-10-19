import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Step1 = props => {
  return (
    <div>
      <h2>Step {props.currentStep}</h2>
      <Form>
        <FormGroup>
          <FormGroup>
            <Label for="exampleEmail">How old are you?</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">What is your gender?</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <Label for="exampleEmail">
            Do Kidney problems run in the family?
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">
            How much water do you drink a day?
          </Label>
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

export default Step1;
