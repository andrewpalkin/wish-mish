import React from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Form, Grid, Header, Segment} from "semantic-ui-react";

import renderDatePicker from "../common/components/form/RenderDatePicker";
import renderSelect from "../common/components/form/RenderSelect";
import renderInput from "../common/components/form/InputComponent";
import renderTextArea from "../common/components/form/RenderTextArea";
import ShoppingCardComponent from "./ShoppingCardComponent";

import {required} from "../common/utils/validations/FieldLevelValidationForm";

import normalizeDoubleNumber from "../common/utils/normalizeDoubleNumber"

const SubmitWishStep2Component = props => {
    const {handleSubmit} = props;
    return (
        <Grid stackable>
            <Grid.Column width={11}>
                <Segment style={{minHeight: "600px"}}>
                    <Header as="h1" dividing>
                        Delivery Details
                    </Header>
                    <Form onSubmit={handleSubmit}>
                        <Field
                            component={renderSelect}
                            name="deliveryTo"
                            label="Delivery to"
                            options={[
                                {key: "s", text: "Sderot", value: "Sderot"},
                                {key: "r", text: "Raanana", value: "Raanana"},
                                {key: "n", text: "Nazeret", value: "Nazeret"}
                            ]}
                            placeholder="Office location"
                            validate={required}
                        />
                        <Field
                            component={renderInput}
                            label="Delivery from"
                            name="deliveryFrom"
                            placeholder="Product URL from online shops like Amazon, eBay etc..."
                            maxLength={30}
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
                            maxLength={250}
                        />
                        <Field
                            component={renderInput}
                            label="Reward for this Job"
                            name="reward"
                            icon="dollar"
                            iconPosition="left"
                            placeholder="Enter the reward amount"
                            normalize={normalizeDoubleNumber}
                        />
                    </Form>
                </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
                <Segment>
                    <ShoppingCardComponent {...props}/>

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
