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
    required={field.required}
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

const SubmitWishStep1Component = props => {
  const { handleSubmit, reset, myValues } = props;
  console.log(myValues);

  return (
    <Grid stackable>
      <Grid.Column width={11}>
        <Segment style={{ minHeight: "600px" }}>
          <Header as="h1" dividing>
            Item Details
          </Header>
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
              required
            />
            <Field
              component={Form.Input}
              label="Product URL"
              name="productURL"
              placeholder="Product URL from online shops like Amazon, eBay etc..."
              validate={required}
            />

            <label
              style={{
                display: "inline-block",
                margin: "0 0 .28571429rem 0",
                color: "rgba(0,0,0,.87)",
                fontSize: ".92857143em",
                fontWeight: "700",
                textTransform: "none"
              }}
            >
              Item Parameters
            </label>

            <label
              style={{
                verticalAlign: "top",
                margin: "-.2em 0 0 .2em",
                color: "#db2828"
              }}
            >
              *
            </label>

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
                required
              />
              <Field
                component={Form.Input}
                name="itemWeight"
                icon="weight"
                iconPosition="left"
                placeholder="Enter weight... (kg)"
                validate={required}
              />
            </Form.Group>
            <Form.Group>
              <Field component={renderCheckbox} label="Bulky" name="isBulky" />
              <Field
                component={renderCheckbox}
                label="Fragile"
                name="isFragile"
              />
              <Field
                component={renderCheckbox}
                label="Dangerous"
                name="isDangerous"
              />
            </Form.Group>
            <Divider hidden />

            <Field
              component={Form.Input}
              type="number"
              label="Item Price"
              name="itemPrice"
              icon="dollar"
              iconPosition="left"
              placeholder="Enter the item price"
              validate={required}
              required
            />
            <Divider hidden />
            <Field
              component={ItemQuantityComponent}
              name="quantity"
              value={1}
              required
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
          {props.formData && props.formData.itemPrice ? (
            <Grid style={{ marginBottom: "5px" }} columns="equal">
              <Grid.Column floated="left">
                <Header size="medium">Item Price</Header>
              </Grid.Column>
              <Grid.Column floated="right" textAlign="right">
                <Header size="large">
                  ${props.formData.itemPrice * props.formData.quantity}.00
                </Header>
              </Grid.Column>
            </Grid>
          ) : null}
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
  form: "wishDetailsStep1Form",
  initialValues: { quantity: 1 }
})(SubmitWishStep1Component);
