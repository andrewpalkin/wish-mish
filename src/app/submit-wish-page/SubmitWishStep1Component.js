import React from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Divider, Form, Grid, Header, Icon, Segment} from "semantic-ui-react";
import {required} from "../common/utils/validations/FieldLevelValidationForm";

import ItemQuantityComponent from "../common/form-component/ItemQuantityComponent";
import renderInput from "../common/components/form/InputComponent";
import renderCheckbox from "../common/components/form/RenderCheckbox";
import renderSelect from "../common/components/form/RenderSelect";
import renderTextArea from "../common/components/form/RenderTextArea";

const normalizeDoubleNumber = (value, previousValue) => {
    if (!value) {
        return value;
    }

    return value.match(/^(?!(0))\d{1,4}\.(\d{1,2})?$/g) ||
    value.match(/^(?!(0))^\d{1,4}\.?$/g)
        ? value
        : previousValue;
};

const SubmitWishStep1Component = props => {
    const {handleSubmit, formDataStep1 = {}} = props;

    return (
        <Grid stackable>
            <Grid.Column width={11}>
                <Segment style={{minHeight: "600px"}}>
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
                                    {key: "s", text: "Small", value: "small"},
                                    {key: "m", text: "Medium", value: "medium"},
                                    {key: "b", text: "Big", value: "big"}
                                ]}
                                placeholder="Small (Medium, Big)"
                                validate={required}
                            />
                            <Field
                                component={renderInput}
                                name="itemWeight"
                                icon="weight"
                                iconPosition="left"
                                placeholder="Enter weight... (kg)"
                                validate={required}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Field component={renderCheckbox} label="Bulky" name="isBulky"/>
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
                        <Divider hidden/>

                        <Field
                            component={renderInput}
                            label="Item Price"
                            name="itemPrice"
                            icon="dollar"
                            iconPosition="left"
                            placeholder="Enter the item price"
                            validate={required}
                            normalize={normalizeDoubleNumber}
                        />
                        <Divider hidden/>
                        <Field
                            component={ItemQuantityComponent}
                            name="quantity"
                            value={1}
                        />
                    </Form>
                </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
                <Segment>
                    <label as="h3">
                        {formDataStep1 ? formDataStep1.productName : ""}
                    </label>
                    <Divider clearing/>
                    {formDataStep1 && formDataStep1.itemPrice ? (
                        <Grid style={{marginBottom: "5px"}} columns="equal">
                            <Grid.Column floated="left">
                                <Header size="medium">Item Price</Header>
                            </Grid.Column>
                            <Grid.Column floated="right" textAlign="right">
                                <Header size="medium">
                                    <Icon name="dollar"/>
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
    initialValues: {quantity: 1},
    destroyOnUnmount: false
})(SubmitWishStep1Component);
