import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="Alcohol"
        type="text"
        component={renderField}
        label="Do you drink alchol?"
      />
      <Field
        name="Energy"
        type="text"
        component={renderField}
        label="Do you feel more tired and have less energy?"
      />
      <Field
        name="Concentration"
        type="text"
        component={renderField}
        label="Do you have problem concentrating?"
      />
      <Field
        name="Appetite"
        type="text"
        component={renderField}
        label="Do you have poor appetite?"
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
})(WizardFormSecondPage);
