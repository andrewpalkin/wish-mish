import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  Message,
  Label,
  Transition,
  Grid,
  Segment,
  Header,
  Divider,
  Button
} from "semantic-ui-react";

const required = value => (value ? undefined : "Required");

const renderCheckbox = field => (
  <Form.Checkbox
    checked={!!field.input.value}
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

const renderRadio = field => (
  <Form.Radio
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);

const renderSelect = field => (
  <Form.Select
    label={field.label}
    name={field.input.name}
    onChange={(e, { value }) => field.input.onChange(value)}
    options={field.options}
    placeholder={field.placeholder}
    value={field.input.value}
  />
);

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
      error={field.meta.touched && field.meta.error ? "error" : false}
    />

    <Transition
      animation="fade up"
      duration={{ hide: 0, show: 500 }}
      visible={field.meta.touched && field.meta.error ? true : false}
    >
      <Label
        basic
        color="red"
        pointing
        label
        visible
        style={{ marginTop: "0px", marginBottom: "10px" }}
      >
        {field.meta.error}
      </Label>
    </Transition>
  </>
);

const SubmitWishStep2Component = props => {
  const { handleSubmit, reset } = props;

  return (
    <Grid>
      <Grid.Column width={12}>
        <Segment style={{ minHeight: "680px" }}>
          <Message info>
            <p>
              You will don't need any special mappings for{" "}
              <code>Form.Input</code>, because it passed events from native
              inputs.
            </p>
            <p>
              The situation with other components is more complicated, because
              the <code>Field</code> relies on the native events. However, it
              can be easily with{" "}
              <a
                href="https://redux-form.com/7.4.2/docs/api/field.md/#2-a-stateless-function"
                target="_blank"
              >
                stateless function
              </a>
              . We recomend to wrap them with generic components to reduce forms
              complexivity.
            </p>
          </Message>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Field
                component={Form.Input}
                label="First name"
                name="firstName"
                placeholder="First name"
                validate={required}
              />
              <Field
                component={Form.Input}
                label="Last name"
                name="lastName"
                placeholder="Last name"
              />
              <Field
                component={renderSelect}
                label="Gender"
                name="gender"
                options={[
                  { key: "m", text: "Male", value: "male" },
                  { key: "f", text: "Female", value: "female" }
                ]}
                placeholder="Gender"
              />
            </Form.Group>
            <Form.Group inline>
              <label>Quantity</label>
              <Field
                component={renderRadio}
                label="One"
                name="quantity"
                radioValue={1}
              />
              <Field
                component={renderRadio}
                label="Two"
                name="quantity"
                radioValue={2}
              />
              <Field
                component={renderRadio}
                label="Three"
                name="quantity"
                radioValue={3}
              />
            </Form.Group>
            <Field
              component={renderTextArea}
              label="About"
              name="about"
              placeholder="Tell us more about you..."
              validate={required}
            />
            <Field
              component={renderCheckbox}
              label="I agree to the Terms and Conditions"
              name="isAgreed"
            />
          </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>
          <Header as="h2" floated="center">
            Summary
          </Header>

          <Divider clearing />
          <Button
            primary
            fluid
            onClick={props.handleSubmitWishDeliveryFormStep2}
          >
            Next
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
export default reduxForm({
  form: "wish-details-step2"
})(SubmitWishStep2Component);
