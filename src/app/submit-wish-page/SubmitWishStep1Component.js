import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  Message,
  Label,
  Transition,
  Segment,
  Grid,
  Button,
  Header,
  Divider
} from "semantic-ui-react";

const required = value => (value ? undefined : "Required");

const pStyle = {
  after: {
    content: "*",
    color: "red"
  }
};

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
      error={field.meta.touched && field.meta.error ? true : false}
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

const SubmitWishStep1Component = props => {
  const { handleSubmit, reset, myValues } = props;
  console.log(myValues);

  return (
    <Grid stackable>
      <Grid.Column width={11}>
        <Segment style={{ minHeight: "680px" }}>
          <Header as="h1" dividing>
            Item Details
          </Header>
          <Divider hidden />
          <Divider hidden />
          <Form onSubmit={handleSubmit}>
            <Field
              component={Form.Input}
              label="Product Name"
              name="productName"
              placeholder="Product name that you wish..."
              validate={required}
              required
            />
            <Field
              component={renderTextArea}
              label="Product Information"
              name="productInformation"
              placeholder="Tell us more about you product that you wish.."
              validate={required}
            />
            <Field
              component={Form.Input}
              label="Product URL"
              name="productURL"
              placeholder="Product URL from online shops like Amazon, eBay etc..."
              validate={required}
            />
            <div
              style={{
                marginBottom: "4px"
              }}
            >
              <label
                style={{
                  fontWeight: 600,
                  marginBottom: "2px"
                }}
              >
                Item Parameters
              </label>
              <label
                style={{
                  color: "red",
                  margin: "0 0px 0px 3px"
                }}
              >
                *
              </label>
            </div>
            <Form.Group widths="equal">
              <Field
                component={renderSelect}
                name="itemSize"
                options={[
                  { key: "s", text: "Small", value: "small" },
                  { key: "m", text: "Medium", value: "medium" },
                  { key: "b", text: "Big", value: "big" }
                ]}
                placeholder="Small (Medium, Big)"
              />
              <Field
                component={Form.Input}
                name="itemWeight"
                placeholder="Weight (kg)"
                validate={required}
              />
            </Form.Group>
            <Field
              component={renderCheckbox}
              label="I agree to the Terms and Conditions"
              name="isAgreed"
            />
          </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column width={5}>
        <Segment>
          <label as="h3">
            {props.formData ? props.formData.productName : ""}
          </label>
          <Divider clearing />
          <Button
            primary
            fluid
            onClick={props.handleSubmitWishDetailsFormStep1}
          >
            Next
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
export default reduxForm({
  form: "wishDetailsStep1Form"
})(SubmitWishStep1Component);
