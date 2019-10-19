import React from "react";
import { Input, Label, FormGroup } from "reactstrap";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <FormGroup>
    <Label>{label}</Label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </FormGroup>
);

export default renderField;
