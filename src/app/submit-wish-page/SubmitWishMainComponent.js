import _ from "lodash";
import React, { Component } from "react";
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
  Button,
  Icon,
  Header,
  Segment,
  Step
} from "semantic-ui-react";

import SubmitWishStep1Component from "./SubmitWishStep1Component";
import SubmitWishStep2Component from "./SubmitWishStep2Component";

export default class SubmitWishPage extends Component {
  state = {
    step: 1,
    submitSucceeded: false
  };

  handleSubmit = e => {
    if (this.state.submitSucceeded) {
      this.setState({ submitSucceeded: true });
    }
  };

  updateStep = step => {
    this.setState({
      step
    });
  };
  render() {
    let currentStep = this.state.step;
    const submitSucceeded = this.state.submitSucceeded;
    console.log("submitSucceeded: ", submitSucceeded);
    // let values = this.props.values;
    // console.log("values: ", values);
    // console.log("currentStep before: ", currentStep);
    // if (submitSucceeded) {
    //   currentStep++;
    //   console.log("submitSucceeded: ", submitSucceeded);
    // }
    // console.log("currentStep after: ", currentStep);
    return (
      <>
        <Step.Group widths={6}>
          <Step active={currentStep === 1} disabled={currentStep !== 1}>
            <Icon name="info" />
            <Step.Content>
              <Step.Title>Wish Description</Step.Title>
            </Step.Content>
          </Step>
          <Step disabled>
            <Icon name="credit card" />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
            </Step.Content>
          </Step>
          <Step disabled>
            <Icon name="feed" />
            <Step.Content>
              <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        {!submitSucceeded ? (
          <SubmitWishStep1Component
            onSubmit={e => {
              console.log(e, "pashol nahui");
            }}
          />
        ) : null}
        {submitSucceeded ? <SubmitWishStep2Component /> : null}
      </>
    );
  }
}
