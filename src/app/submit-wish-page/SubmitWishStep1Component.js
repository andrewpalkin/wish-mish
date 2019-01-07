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

const normalizeDoubleNumber = (value, previousValue) => {
  if (!value) {
    return value;
  }

  return value.match(/^(?!(0))\d{1,4}\.(\d{1,2})?$/g) ||
    value.match(/^(?!(0))^\d{1,4}\.?$/g)
    ? value
    : previousValue;
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

const renderInput = field => (
  <Form.Input
    required={field.required}
    label={field.label}
    name={field.input.name}
    value={field.input.value}
    icon={field.icon}
    iconPosition={field.iconPosition}
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

const SubmitWishStep1Component = props => {
  const { handleSubmit, reset, formDataStep1 = {} } = props;

  return (
    <Grid stackable>
      <Grid.Column width={11}>
        <Segment style={{ minHeight: "600px" }}>
          <Header as="h1" dividing>
            Item Details
          </Header>
          <Form onSubmit={handleSubmit}>
            <Field
              component={renderInput}
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
                validate={required}
                required
              />
              <Field
                component={renderInput}
                name="itemWeight"
                icon="weight"
                iconPosition="left"
                placeholder="Enter weight... (kg)"
                validate={required}
                required
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
              component={renderInput}
              label="Item Price"
              name="itemPrice"
              icon="dollar"
              iconPosition="left"
              placeholder="Enter the item price"
              validate={required}
              required
              normalize={normalizeDoubleNumber}
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
            {formDataStep1 ? formDataStep1.productName : ""}
          </label>
          <Divider clearing />
          {formDataStep1 && formDataStep1.itemPrice ? (
            <Grid style={{ marginBottom: "5px" }} columns="equal">
              <Grid.Column floated="left">
                <Header size="medium">Item Price</Header>
              </Grid.Column>
              <Grid.Column floated="right" textAlign="right">
                <Header size="medium">
                  <Icon name="dollar" />
                  {(formDataStep1.itemPrice * formDataStep1.quantity)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </Header>
              </Grid.Column>
            </Grid>
          ) : null}
          <Button primary fluid onClick={props.handleSubmitFormStep1}>
            Next
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
export default reduxForm({
  form: "wishDetailsStep1Form",
  initialValues: { quantity: 1 },
  destroyOnUnmount: false
})(SubmitWishStep1Component);
