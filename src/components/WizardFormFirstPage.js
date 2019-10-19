import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Label, FormGroup } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

// <Field
//   name="Age"
//   type="text"
//   component={renderField}
//   label="How old are you?"
// />
//
// <Field
//   name="Gender"
//   type="text"
//   component={renderField}
//   label="What is your gender?"
// />

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormGroup>
          <Label>How old are you? </Label>
        </FormGroup>
        <FormGroup>
          <Field name="Age" component="input" type="radio" value="20-30" />{" "}
          20-30
        </FormGroup>
        <FormGroup>
          <Label check>
            <Field name="Age" component="input" type="radio" value="30-40" />{" "}
            30-40
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Age" component="input" type="radio" value="40-60" />{" "}
            40-60
          </Label>
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <FormGroup>
          <Label>What is your gender?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Gender" component="input" type="radio" value="Male" />
          </Label>{" "}
          Male
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Gender"
              component="input"
              type="radio"
              value="Female"
            />
          </Label>{" "}
          Female
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <FormGroup>
          <Label>Do Kidney problems run in the family?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Family"
              component="input"
              type="radio"
              value="Yes"
            ></Field>
          </Label>{" "}
          Yes
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Family"
              component="input"
              type="radio"
              value="No"
            ></Field>
          </Label>{" "}
          No
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <FormGroup>
          <Label>How much water do you drink a day?</Label>
        </FormGroup>
        <FormGroup>
          <Field
            name="Water"
            component="input"
            type="radio"
            value="6 to 8 cups"
          ></Field>{" "}
          6 to 8 cups
        </FormGroup>
        <FormGroup>
          <Field
            name="Water"
            component="input"
            type="radio"
            value="4 to 6 cups"
          ></Field>{" "}
          4 to 6 cups
        </FormGroup>
        <FormGroup>
          <Field
            name="Water"
            component="input"
            type="radio"
            value="1 to 3 cups"
          ></Field>{" "}
          1 to 3 cups
        </FormGroup>
      </FormGroup>
      <div className="button_style">
        <Button type="submit" className="next">
          Next
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
})(WizardFormFirstPage);
