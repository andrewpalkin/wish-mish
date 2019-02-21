import React from "react";
import {
  Image,
  Button,
  Card,
  Grid,
  Icon,
  Header,
  Segment,
  Divider,
  Label
} from "semantic-ui-react";

const WishLightComponent = props => {
  const { diffDate } = props;

  return (
    <Card fluid link>
      <Card.Content>
        <Grid>
          <Grid.Column width={1} verticalAlign="middle">
            {props.imageURL ? (
              <Image
                circular
                size="tiny"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
            ) : (
              <Label
                size="large"
                circular
                style={{
                  marginRight: "4px",
                  backgroundColor: "#F89235",
                  color: "white"
                }}
              >
                {props.initials}
              </Label>
            )}
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
              {props.firstName}
            </label>
          </Grid.Column>
          <Grid.Column width={8} textAlign="right" verticalAlign="middle">
            <label
              floated="right"
              style={{
                fontSize: "1em",
                color: "rgba(0, 0, 0, 0.4)"
              }}
            >
              {diffDate ? `${diffDate} ago` : null}
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
            <Grid.Row
              style={{
                paddingBottom: "10px"
              }}
            >
              <Header as="h1">{props.productName}</Header>
            </Grid.Row>

            <Grid.Row>
              <Segment secondary>
                <Grid stackable columns={3}>
                  <Grid.Column
                    style={{
                      paddingTop: "5px",
                      paddingBottom: "0px",
                      verticalAlign: "middle"
                    }}
                  >
                    <Grid.Row>
                      <label
                        style={{
                          fontSize: "1em",
                          color: "rgba(0, 0, 0, 0.4)"
                        }}
                      >
                        Delivered To
                      </label>
                      <Grid.Row />
                      <Header
                        as="h4"
                        style={{
                          marginLeft: "0px",
                          marginTop: "5px",
                          marginBottom: "5px"
                        }}
                      >
                        {props.deliveryTo}
                      </Header>
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column
                    style={{
                      paddingTop: "5px",
                      paddingBottom: "0px"
                    }}
                  >
                    <label
                      style={{
                        fontSize: "1em",
                        color: "rgba(0, 0, 0, 0.4)"
                      }}
                    >
                      From
                    </label>
                    <Grid.Row />
                    <Header
                      as="h4"
                      style={{
                        marginLeft: "0px",
                        marginTop: "5px",
                        marginBottom: "5px"
                      }}
                    >
                      {props.deliveryFrom}
                    </Header>
                  </Grid.Column>
                  {props.deliveryBeforeDate ? (
                    <Grid.Column
                      style={{
                        paddingTop: "5px",
                        paddingBottom: "0px"
                      }}
                    >
                      <label
                        style={{
                          fontSize: "1em",
                          color: "rgba(0, 0, 0, 0.4)"
                        }}
                      >
                        Before
                      </label>
                      <Grid.Row />
                      <Header
                        as="h4"
                        style={{
                          marginLeft: "0px",
                          marginTop: "5px",
                          marginBottom: "5px"
                        }}
                      >
                        {props.deliveryBeforeDate}
                      </Header>
                    </Grid.Column>
                  ) : null}
                </Grid>
              </Segment>
            </Grid.Row>

            <Grid
              style={{
                paddingTop: "10px",
                paddingBottom: "5px",
                paddingRight: "5px",
                paddingLeft: "5px"
              }}
            >
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

export default WishLightComponent;
