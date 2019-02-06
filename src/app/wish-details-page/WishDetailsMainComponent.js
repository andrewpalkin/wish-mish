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
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={8} floated="right">
                  <div className="ui card fluid" style={{ height: "100%" }}>
                    <div class="image" fluid>
                      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                    </div>
                    <div class="content centered">
                      <a centered class="header">
                        {wishDetails.productName}
                      </a>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div class="ui card fluid">
                    <div class="content">
                      <div class="center aligned  author">
                        <img
                          class="ui avatar image big"
                          src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                        />
                      </div>
                      <br />

                      <div class="center aligned header">
                        {wishDetails.firstName}
                      </div>
                      <Divider hidden />
                      <div class="meta">
                        <span class="right floated time">2 days ago</span>
                        <span class="category">Requested</span>
                      </div>
                      <Divider />
                      <div>
                        <span class="right floated time">
                          <strong>{wishDetails.itemPrice}$</strong>
                        </span>
                        <span class="category meta">Price for 1 item</span>
                      </div>
                      <div>
                        <span class="right floated time">
                          <strong>{wishDetails.reward}$</strong>
                        </span>
                        <span class="category meta">Reward for one item</span>
                      </div>

                      <Divider hidden />
                      <Button primary fluid>
                        Make your offer
                      </Button>
                      <Divider />
                      <div>
                        <span class="right floated time">
                          <strong>{wishDetails.deliveryTo}</strong>
                        </span>
                        <span class="category meta">
                          <i class="share icon" />
                          Delivery to
                        </span>
                      </div>
                      <div>
                        <span class="right floated time">
                          <strong>{wishDetails.deliveryFrom}</strong>
                        </span>
                        <span class="category meta">
                          <i class="reply icon" />
                          From
                        </span>
                      </div>
                      <div>
                        <span class="right floated time">
                          <strong>{wishDetails.productURL}</strong>
                        </span>
                        <span class="category meta">
                          <i class="map pin  icon" />
                          Where to buy
                        </span>
                      </div>
                      <div>
                        <span class="right floated time">
                          <strong>{wishDetails.quantity}</strong>
                        </span>
                        <span class="category meta">
                          <i class="database icon" />
                          Quantity
                        </span>
                      </div>
                    </div>
                    <div class="extra content">
                      <a>
                        <i class="comments outline icon" />2 Offers
                      </a>
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid centered textAlign="center">
              <Grid.Row>
                <div>
                  <br />
                  <br />
                  <span class="right floated time">
                    <strong>DELIVERY OFFERS</strong>
                  </span>
                </div>
              </Grid.Row>
            </Grid>
            <Grid centered>
              <Grid.Column width={8}>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
            </Grid>
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
