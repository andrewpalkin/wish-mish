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

export default class SubmitWishMainComponent extends Component {
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
    const formDataStep1 = this.props.formDataStep1;
    const formDataStep2 = this.props.formDataStep2;
    const formDataStep3 = this.props.formDataStep3;

    return (
      <>
        <Step.Group widths={6}>
          <Step active={showStep1} completed={currentStep > 1} link>
            <Icon name="edit" />
            <Step.Content>
              <Step.Title>Product Details</Step.Title>
            </Step.Content>
          </Step>
          <Step
            active={showStep2}
            disabled={currentStep < 3}
            completed={currentStep > 2}
            link
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
            link
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
            formData={formDataStep1}
          />
        ) : null}
        {showStep2 ? (
          <SubmitWishStep2Container
            formDataStep1={formDataStep1}
            formData={formDataStep2}
            onSubmit={this.handleWishDeliveryDetailsFormSubmit}
          />
        ) : null}
        {showStep3 ? <SubmitWishStep3Container /> : null}
      </>
    );
  }
}
