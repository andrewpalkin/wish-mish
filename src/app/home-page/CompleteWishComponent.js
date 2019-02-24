import React from "react";
import {
  Image,
  Card,
  Grid,
  Header,
  Segment,
  Label,
  Icon
} from "semantic-ui-react";

const CompleteWishComponent = props => {
  return (
    <Card fluid>
      <Image src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-silver-select-2018?wid=470&hei=556&fmt=png-alpha&.v=1522347733364" />
      <Card.Content>
        <Grid columns="equal">
          <Grid.Column verticalAlign="middle" textAlign="center">
            <Image
              circular
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" textAlign="center">
            <Icon disabled name="plane" size="big" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" textAlign="center">
            <Image
              circular
              size="tiny"
              src="https://react.semantic-ui.com/images/avatar/large/molly.png"
            />
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default CompleteWishComponent;
