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

import SubmitWishStep1Container from "./SubmitWishStep1Container";
import SubmitWishStep2Container from "./SubmitWishStep2Container";
import SubmitWishStep3Container from "./SubmitWishStep3Container";

export default class SubmitWishPage extends Component {
  state = {
    showStep1: true,
    showStep2: false,
    showStep3: false,
    currentStep: 1
  };

  handleWishDetailsFormSubmit = e => {
    this.setState({
      showStep2: true,
      showStep1: false,
      showStep3: false,
      currentStep: 2
    });
  };

  handleWishDeliveryDetailsFormSubmit = e => {
    this.setState({
      showStep1: false,
      showStep2: false,
      showStep3: true,
      currentStep: 3
    });
  };

  updateStep = step => {
    this.setState({
      step
    });
  };
  render() {
    let currentStep = this.state.currentStep;
    const submitSucceeded = this.state.submitSucceeded;
    const showStep1 = this.state.showStep1;
    const showStep2 = this.state.showStep2;
    const showStep3 = this.state.showStep3;
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
          <Step
            active={showStep1}
            disabled={!showStep1}
            completed={currentStep > 1}
          >
            <Icon name="edit" />
            <Step.Content>
              <Step.Title>Product Details</Step.Title>
            </Step.Content>
          </Step>
          <Step
            active={showStep2}
            disabled={!showStep2}
            completed={currentStep > 2}
          >
            <Icon name="shipping fast" />
            <Step.Content>
              <Step.Title>Delivery Details</Step.Title>
            </Step.Content>
          </Step>
          <Step
            active={showStep3}
            disabled={!showStep3}
            completed={currentStep > 3}
          >
            <Icon name="thumbs up" />
            <Step.Content>
              <Step.Title>Confirm</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        {showStep1 ? (
          <SubmitWishStep1Container
            onSubmit={this.handleWishDetailsFormSubmit}
          />
        ) : null}
        {showStep2 ? (
          <SubmitWishStep2Container
            onSubmit={this.handleWishDeliveryDetailsFormSubmit}
          />
        ) : null}
        {showStep3 ? <SubmitWishStep3Container /> : null}
      </>
    );
  }
}
