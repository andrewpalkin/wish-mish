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
  Divider,
  Icon
} from "semantic-ui-react";
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from "semantic-ui-calendar-react";
import ItemQuantityComponent from "../common/form-component/ItemQuantityComponent";

const required = value => (value ? undefined : "Required");

const pStyle = {
  after: {
    content: "*",
    color: "red"
  }
};

const renderCheckbox = field => (
  <Form.Checkbox
    toggle
    checked={!!field.input.value}
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

const renderDatePicker = field => (
  <DateInput
    clearable={field.input.value ? true : false}
    iconPosition="left"
    value={field.input.value || "Please select date"}
    onChange={(e, { value }) => field.input.onChange(value)}
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

const renderInput = field => (
  <Form.Input
    required={field.required}
    label={field.label}
    name={field.input.name}
    onChange={(e, { value }) => field.input.onChange(value)}
    error={field.meta.touched && field.meta.error ? true : false}
    placeholder={
      field.meta.touched && field.meta.error
        ? "Please fill mandatory field"
        : field.placeholder
    }
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
    required={field.required}
    error={field.meta.touched && field.meta.error ? true : false}
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
      required={field.required}
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

const SubmitWishStep2Component = props => {
  const { handleSubmit, reset, formDataStep1 = {}, formDataStep2 = {} } = props;
  return (
    <Grid stackable>
      <Grid.Column width={11}>
        <Segment style={{ minHeight: "600px" }}>
          <Header as="h1" dividing>
            Delivery Details
          </Header>
          <Form onSubmit={handleSubmit}>
            <Field
              component={renderSelect}
              name="deliveryTo"
              label="Delivery to"
              options={[
                { key: "s", text: "Sderot", value: "Sderot" },
                { key: "r", text: "Raanana", value: "Raanana" },
                { key: "n", text: "Nazeret", value: "Nazeret" }
              ]}
              placeholder="Office location"
              validate={required}
              required
            />
            <Field
              component={Form.Input}
              label="Delivery from"
              name="deliveryFrom"
              placeholder="Product URL from online shops like Amazon, eBay etc..."
            />
            <Field
              component={renderDatePicker}
              label="Delivery before"
              name="deliveryBeforeDate"
              placeholder="Product URL from online shops like Amazon, eBay etc..."
            />
            <Field
              component={renderTextArea}
              label="Additional details for your traveler"
              name="additionalProductInformation"
              placeholder="Provide more details that you think are important"
              validate={required}
              required
            />
            <Field
              component={Form.Input}
              label="Reward for this Job"
              name="reward"
              placeholder="Product URL from online shops like Amazon, eBay etc..."
            />
          </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column width={5}>
        <Segment>
          <label as="h1">
            {formDataStep1 ? formDataStep1.productName : ""}
          </label>
          {formDataStep2.deliveryTo ||
          formDataStep2.deliveryFrom ||
          formDataStep2.deliveryBeforeDate ? (
            <Divider clearing />
          ) : null}
          {formDataStep2.deliveryTo ? (
            <Header size="medium">Delivey to {formDataStep2.deliveryTo}</Header>
          ) : null}
          {formDataStep2.deliveryFrom ? (
            <Header size="medium">
              Delivey from {formDataStep2.deliveryFrom}
            </Header>
          ) : null}
          {formDataStep2.deliveryBeforeDate ? (
            <Header size="medium">
              Delivery before {formDataStep2.deliveryBeforeDate}
            </Header>
          ) : null}
          <Divider clearing />
          {formDataStep1 && formDataStep1.itemPrice ? (
            <Grid style={{ marginBottom: "5px" }} columns="equal">
              <Grid.Column floated="left">
                <Header size="medium">Item Price</Header>
                {formDataStep2.reward ? (
                  <Header size="medium">Reward</Header>
                ) : null}
              </Grid.Column>
              <Grid.Column floated="right" textAlign="right">
                <Header size="large">
                  ${formDataStep1.itemPrice * formDataStep1.quantity}
                  .00
                </Header>
                {formDataStep2.reward ? (
                  <Header size="medium">${formDataStep2.reward}</Header>
                ) : null}
              </Grid.Column>
            </Grid>
          ) : null}
          <Button primary fluid onClick={props.handleSubmitFormStep2}>
            Next
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
export default reduxForm({
  form: "wishDetailsStep2Form",
  destroyOnUnmount: false
})(SubmitWishStep2Component);
