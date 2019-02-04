import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import renderInput from "../../../common/components/form/InputComponent";
import {
  email,
  required
} from "../../../common/utils/validations/FieldLevelValidationForm";

const LoginForm = props => {
  const { handleSubmit, login } = props;

  return (
    <div className="login-form">
      {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
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
            Log-in to your account
          </Header>
          {props.loginError ? (
            <Message
              style={{ textAlign: "left" }}
              error
              header="Login Failed"
              content="Invalid email or password."
            />
          ) : null}
          <Form size="large" onSubmit={handleSubmit(login)}>
            <Segment stacked>
              <Field
                component={renderInput}
                name="loginEmail"
                icon="mail"
                placeholder="E-mail address"
                iconPosition="left"
                validate={[required, email]}
                fluid
              />
              <Field
                component={renderInput}
                name="loginPassword"
                icon="lock"
                placeholder="Password"
                iconPosition="left"
                fluid
                type="password"
              />
              <Button type="submit" color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: "loginForm"
})(LoginForm);
