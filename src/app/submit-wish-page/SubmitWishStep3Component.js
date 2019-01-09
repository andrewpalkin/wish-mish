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

const SubmitWishStep3Component = props => {
  const { formDataStep1 = {}, formDataStep2 = {} } = props;
  return (
    <Grid>
      <Grid.Column width={11}>
        <Segment style={{ minHeight: "680px" }}>
          <Header as="h1" dividing>
            Confirm wish details
          </Header>
          <Message info>
            <p>
              sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
              asd asd asd asd
            </p>
          </Message>
          <Message info>
            <p>
              sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
              asd asd asd asd
            </p>
          </Message>
          <Message info>
            <p>
              sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
              asd asd asd asd
            </p>
          </Message>
          <Message info>
            <p>
              sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
              asd asd asd asd
            </p>
          </Message>
          <Message info>
            <p>
              sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
              asd asd asd asd
            </p>
          </Message>
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
          <Button
            primary
            fluid
            onClick={() =>
              props.publishWish({
                ...props.formDataStep1,
                ...props.formDataStep2
              })
            }
          >
            Publish
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default SubmitWishStep3Component;
