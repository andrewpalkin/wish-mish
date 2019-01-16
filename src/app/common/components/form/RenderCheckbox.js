import React from "react";
import { Form } from "semantic-ui-react";

const renderCheckbox = field => (
  <Form.Checkbox
    toggle
    checked={!!field.input.value}
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

export default renderCheckbox;
