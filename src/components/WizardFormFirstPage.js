import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="Age"
        type="text"
        component={renderField}
        label="How old are you?"
      />
      <Field
        name="Gender"
        type="text"
        component={renderField}
        label="What is your gender?"
      />
      <Field
        name="Family"
        type="text"
        component={renderField}
        label="Do kidney problems run in families"
      />
      <Field
        name="Water"
        type="text"
        component={renderField}
        label="How much do you drink a day?"
      />
      <div>
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
