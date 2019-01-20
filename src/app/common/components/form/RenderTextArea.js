import React from "react";
import { Form, Transition, Label } from "semantic-ui-react";

const renderTextArea = field => (
  <>
    <Form.TextArea
      {...field.input}
      label={field.label}
      placeholder={
        field.meta.touched && field.meta.error
          ? "Please fill mandatory field"
          : field.placeholder
      }
      error={field.meta.touched && field.meta.error ? true : false}
    />

    <Transition
      animation="fade up"
      duration={{ hide: 0, show: 500 }}
      visible={field.meta.touched && field.meta.error ? true : false}
    >
      <Label
        basic
        pointing
        style={{
          marginTop: "0px",
          marginBottom: "10px",
          color: "#9f3a38",
          borderColor: "#e0b4b4"
        }}
      >
        {field.meta.error}
      </Label>
    </Transition>
  </>
);

export default renderTextArea;
