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
  Step,
  Grid,
  Dimmer,
  Loader,
  Divider
} from "semantic-ui-react";

class WishDetailsMainComponent extends Component {
  state = {};
  render() {
    const wishId = this.props.match.params.id;
    const wishDetails = this.props.wishDetails;
    console.log("Wish details is: ", wishDetails);
    return (
      <div>
        {wishDetails ? (
          <>
            <Divider hidden />
            <Grid stackable columns={2}>
              <Grid.Column>
                <Segment>
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Segment>
              </Grid.Column>
            </Grid>
            <Grid centered columns={2}>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
            </Grid>
            <div>
              <div>Wisher name: {wishDetails.firstName}</div>
              <div>Item price: {wishDetails.itemPrice}</div>
              <div>Product Name: {wishDetails.productName}</div>
              <div>Reward: {wishDetails.reward}</div>
            </div>
          </>
        ) : (
          <Dimmer inverted active>
            <Loader>Loading</Loader>
          </Dimmer>
        )}
      </div>
    );
  }
}

export default WishDetailsMainComponent;
