import React from "react";
import { Form } from "semantic-ui-react";

const renderSelect = field => (
  <Form.Select
    label={field.label}
    name={field.input.name}
    onChange={(e, { value }) => field.input.onChange(value)}
    options={field.options}
    placeholder={field.placeholder}
    value={field.input.value}
    error={field.meta.touched && field.meta.error ? true : false}
  />
);

export default renderSelect;
