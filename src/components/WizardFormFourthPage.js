import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";

const WizardFormFourthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormGroup>
          <Label>How often do you go to toilet?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Toilet"
              component="input"
              type="radio"
              value="6-8"
            ></Field>
          </Label>{" "}
          6-8
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Toilet"
              component="input"
              type="radio"
              value="4-6"
            ></Field>
          </Label>{" "}
          4-6
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Toilet"
              component="input"
              type="radio"
              value="1-3"
            ></Field>
          </Label>{" "}
          1-3
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <FormGroup>
          <Label>Do you have blood in your urine?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Blood" component="input" type="radio" value="Yes" />
          </Label>{" "}
          Yes
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Blood" component="input" type="radio" value="No" />
          </Label>{" "}
          No
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <FormGroup>
          <Label>Do you have white and cloudy urne?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Cloud" component="input" type="radio" value="Yes" />
          </Label>{" "}
          Yes
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Cloud" component="input" type="radio" value="No" />
          </Label>{" "}
          No
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <FormGroup>
          <Label>Do you have strong or abnormal smell in your urine?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Smell" component="input" type="radio" value="Yes" />
          </Label>{" "}
          Yes
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Smell" component="input" type="radio" value="No" />
          </Label>{" "}
          No
        </FormGroup>
      </FormGroup>

      <div className="button_style">
        <Button type="button" className="previous" onClick={previousPage}>
          Previous
        </Button>
        <Button type="submit" className="next">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFourthPage);
