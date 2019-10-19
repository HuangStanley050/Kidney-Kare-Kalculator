import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

const WizardFormFourthPage = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="Skin"
        type="text"
        component={renderField}
        label="Do you have dry itchy skin?"
      />
      <Field
        name="Toilet"
        type="text"
        component={renderField}
        label="How oftend do you go to the toilet"
      />
      <Field
        name="Blood"
        type="text"
        component={renderField}
        label="Do you have blood in your urine"
      />
      <Field
        name="Cloudy"
        type="text"
        component={renderField}
        label="Do you have white and cloudy urine?"
      />
      <Field
        name="Smell"
        type="text"
        component={renderField}
        label="Do you have strong or abnormal smell to your urine?"
      />
      <div>
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
