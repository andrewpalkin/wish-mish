import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

import { Field, reduxForm } from "redux-form";

import renderInput from "../common/components/form/InputComponent";

const SignupForm = props => {
  const { handleSubmit, signup } = props;
  return (
    <div className="signup-form">
      {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.signup-form {
        height: 100%;
      }
    `}</style>
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Sign up
          </Header>
          <Form size="large" onSubmit={handleSubmit(signup)}>
            <Segment stacked>
              <Field
                component={renderInput}
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Field
                component={renderInput}
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Field
                component={renderInput}
                name="firstName"
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                fluid
              />
              <Field
                component={renderInput}
                name="lastName"
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
                fluid
              />
              <Button color="teal" fluid size="large">
                Sign up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <a href="#">Log in</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: "signupForm"
})(SignupForm);
