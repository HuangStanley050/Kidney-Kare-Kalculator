import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "reactstrap";
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
      <Field
        name="Sleeping"
        type="text"
        label="Do you have trouble sleeping?"
        component={renderField}
      />

      <Field
        name="Cramp"
        type="text"
        component={renderField}
        label="Do you often have muscle cramps?"
      />
      <Field
        name="Swollen"
        type="text"
        component={renderField}
        label="Do have swollen feet and ankles?"
      />
      <Field
        name="Puffy"
        type="text"
        component={renderField}
        label="Do have puffiness around your eyes, especially in the morning?"
      />

      <div>
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
