import React from "react";
import { Form } from "semantic-ui-react";

const renderInput = field => (
  <Form.Input
    required={field.required}
    label={field.label}
    name={field.input.name}
    value={field.input.value}
    type={field.type}
    icon={field.icon}
    iconPosition={field.iconPosition}
    onChange={(e, { value }) => field.input.onChange(value)}
    error={field.meta.touched && field.meta.error ? true : false}
    placeholder={field.meta.error ? field.meta.error : field.placeholder}
  />
);

export default renderInput;
