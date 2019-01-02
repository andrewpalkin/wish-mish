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
  return (
    <Grid>
      <Grid.Column width={12}>
        <Segment style={{ minHeight: "680px" }}>
          <Message info>
            <p>Cofirm Submit Wish</p>
          </Message>
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
            onClick={props.handleSubmitWishConfirmationStep3}
          >
            Next
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default SubmitWishStep3Component;
