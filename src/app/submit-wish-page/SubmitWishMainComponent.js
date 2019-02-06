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
import SubmitWishStep3Component from "./SubmitWishStep3Component";

export default class SubmitWishMainComponent extends Component {
  state = {
    showStep1: true,
    showStep2: false,
    showStep3: false,
    currentStep: 1
  };

  showStep2 = e => {
    this.setState({
      showStep2: true,
      showStep1: false,
      showStep3: false,
      currentStep: 2
    });
  };

  showStep3 = e => {
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
    const showStep1 = this.state.showStep1;
    const showStep2 = this.state.showStep2;
    const showStep3 = this.state.showStep3;
    const formDataStep1 = this.props.formDataStep1;
    const formDataStep2 = this.props.formDataStep2;

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
          <SubmitWishStep1Component
            onSubmit={this.showStep2}
            formDataStep1={formDataStep1}
            handleSubmitFormStep1={this.props.handleSubmitWishDetailsFormStep1}
          />
        ) : null}
        {showStep2 ? (
          <SubmitWishStep2Component
            formDataStep1={formDataStep1}
            formDataStep2={formDataStep2}
            onSubmit={this.showStep3}
            handleSubmitFormStep2={this.props.handleSubmitWishDetailsFormStep2}
          />
        ) : null}
        {showStep3 ? (
          <SubmitWishStep3Component
            formDataStep1={formDataStep1}
            formDataStep2={formDataStep2}
            publishWish={this.props.publishWish}
            userId={this.props.userId}
            firstName={this.props.firstName}
            initials={this.props.initials}
            submitWishShowSpinner={this.props.submitWishShowSpinner}
            submitWishSucced={this.props.submitWishSucced}
            history={this.props.history}
          />
        ) : null}
      </>
    );
  }
}
