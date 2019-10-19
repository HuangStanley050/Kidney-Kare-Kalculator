import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, FormGroup, Label } from "reactstrap";
import renderField from "./renderField";
import validate from "./validate";
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting, nextPage } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormGroup>
          <Label>Do you have poor appetite?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Appetite"
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
              name="Appetite"
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
          <Label>Do you have trouble sleeping?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Sleeping"
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
              name="Sleeping"
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
          <Label>Do you have muscle cramps at night?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Cramps"
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
              name="Cramps"
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
          <Label>Do you have swollen feet and ankle?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Swollen"
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
              name="Swollen"
              component="input"
              type="radio"
              value="No"
            ></Field>
          </Label>{" "}
          No
        </FormGroup>
      </FormGroup>

      <div className="button_style">
        <Button type="button" className="previous" onClick={previousPage}>
          Previous
        </Button>
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
})(WizardFormThirdPage);
