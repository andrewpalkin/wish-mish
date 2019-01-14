import _ from "lodash";
import React, { Component } from "react";
import {
  Image,
  Button,
  Card,
  Grid,
  Icon,
  Header,
  Segment,
  Divider
} from "semantic-ui-react";

const WishComponent = props => {
  console.log(" fromWishComponent FireStore data ", props);
  console.log("Reward = ", props.reward ? "true" : "false");
  return (
    <Card fluid link>
      <Card.Content>
        <Grid>
          <Grid.Column width={1} verticalAlign="middle">
            <Image
              circular
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
          </Grid.Column>
          <Grid.Column width={7} verticalAlign="middle">
            <label
              style={{
                fontWeight: 700,
                fontSize: "1.28571429em",
                marginTop: "-.21425em",
                lineHeight: "1.28571429em"
              }}
            >
              Steve
            </label>
          </Grid.Column>
          <Grid.Column width={8} align="right" verticalAlign="middle">
            <label
              floated="right"
              style={{
                fontSize: "1em",
                color: "rgba(0, 0, 0, 0.4)"
              }}
            >
              40 minutes ago
            </label>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content extra>
        <Grid stackable>
          <Grid.Column width={4}>
            <Image
              rounded
              fluid
              bordered
              centered
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-silver-select-2018?wid=470&hei=556&fmt=png-alpha&.v=1522347733364"
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid.Row>
              <Header as="h1">{props.productName}</Header>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row>
              <Segment>
                <Grid stackable columns={3}>
                  <Grid.Column
                    style={{ marginBottom: "25px", marginTop: "0px" }}
                  >
                    <label
                      style={{
                        fontSize: "1em",
                        color: "rgba(0, 0, 0, 0.4)"
                      }}
                    >
                      Delivered To
                    </label>
                    <Header
                      as="h4"
                      style={{
                        display: "inline-block",
                        marginLeft: "10px"
                      }}
                    >
                      {props.deliveryTo}
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <label
                      style={{
                        display: "inline-block",
                        fontSize: "1em",
                        color: "rgba(0, 0, 0, 0.4)"
                      }}
                    >
                      From
                    </label>
                    <Header
                      as="h4"
                      style={{
                        display: "inline-block",
                        marginLeft: "10px"
                      }}
                    >
                      {props.deliveryFrom}
                    </Header>
                  </Grid.Column>
                  {props.deliveryBeforeDate ? (
                    <Grid.Column>
                      <label
                        style={{
                          display: "inline-block",
                          fontSize: "1em",
                          color: "rgba(0, 0, 0, 0.4)"
                        }}
                      >
                        Before
                      </label>
                      <Header
                        as="h4"
                        style={{
                          display: "inline-block",
                          marginLeft: "10px"
                        }}
                      >
                        {props.deliveryBeforeDate}
                      </Header>
                    </Grid.Column>
                  ) : (
                    ""
                  )}
                </Grid>
              </Segment>
            </Grid.Row>
            {props.productURL ? (
              <Grid.Row>
                <label
                  style={{
                    display: "inline-block",
                    fontSize: "1em",
                    color: "rgba(0, 0, 0, 0.4)"
                  }}
                >
                  Item URL
                </label>
                <Header
                  color="blue"
                  as="a"
                  style={{
                    display: "inline-block",
                    marginLeft: "10px"
                  }}
                >
                  {props.productURL}
                </Header>
              </Grid.Row>
            ) : (
              ""
            )}
            <Divider />
            {props.reward ? (
              <>
                <label
                  style={{
                    fontWeight: 700,
                    fontSize: "1.28571429em",
                    marginTop: "-.21425em",
                    lineHeight: "1.28571429em"
                  }}
                >
                  Traveler reward
                </label>
                <Divider hidden />
              </>
            ) : (
              ""
            )}

            <Grid>
              <Grid.Column width={8} verticalAlign="middle">
                <Header size="medium">
                  {props.reward ? (
                    <>
                      <Icon name="dollar" />
                      {Number(props.reward)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </>
                  ) : (
                    ""
                  )}
                </Header>
              </Grid.Column>

              <Grid.Column width={8} align="right" verticalAlign="middle">
                <Button basic>Make Offer</Button>
              </Grid.Column>
            </Grid>
            <Divider hidden />
            <Grid>
              <Grid.Column width={8} verticalAlign="middle">
                <label
                  style={{
                    display: "inline-block",
                    fontSize: "1em",
                    color: "rgba(0, 0, 0, 0.4)"
                  }}
                >
                  Item price: $
                  {(props.itemPrice * props.quantity)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </label>
              </Grid.Column>
              <Grid.Column width={8} align="right" verticalAlign="middle">
                <label
                  as="a"
                  style={{
                    display: "inline-block",
                    fontSize: "1em",
                    color: "rgba(0, 0, 0, 0.4)"
                  }}
                >
                  2 offers
                </label>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default WishComponent;
