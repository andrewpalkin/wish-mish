import React from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Divider, Form, Grid, Header, Segment} from "semantic-ui-react";
import {required} from "../common/utils/validations/FieldLevelValidationForm";

import ItemQuantityComponent from "../common/form-component/ItemQuantityComponent";
import renderInput from "../common/components/form/InputComponent";
import renderCheckbox from "../common/components/form/RenderCheckbox";
import renderSelect from "../common/components/form/RenderSelect";
import renderTextArea from "../common/components/form/RenderTextArea";

import ShoppingCardComponent from "./ShoppingCardComponent"
import normalizeDoubleNumber from "../common/utils/normalizeDoubleNumber"
import normalizeTextInput from "../common/utils/normalizeTextInput";
import normalizeWeightDoubleNumber from "../common/utils/normalizeWeightDoubleNumber"

const SubmitWishStep1Component = props => {
    const {handleSubmit} = props;

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
                            normalize={normalizeTextInput}
                            maxLength={30}
                        />
                        <Field
                            component={renderTextArea}
                            label="Product Information"
                            name="productInformation"
                            placeholder="Tell us more about you product that you wish.."
                            validate={required}
                            maxLength={250}
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
                                normalize={normalizeWeightDoubleNumber}
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
                    <ShoppingCardComponent {...props}/>

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
