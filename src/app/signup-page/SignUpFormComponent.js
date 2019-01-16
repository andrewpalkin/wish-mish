import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

const SignupForm = () => (
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
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign up
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="First Name"
              type="firstName"
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Last Name"
              type="lastName"
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

export default SignupForm;
