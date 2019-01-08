import React from "react";
import { Container, Header, Button, Grid, Icon } from "semantic-ui-react";

const OnTopNavBar = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to top, #000000, #1b1a1a, #302d2c, #44423f, #575954)",
        minHeight: "160px",
        opacity: 0.9,
        marginBottom: "12px"
      }}
    >
      <Grid>
        <Grid.Column style={{ marginTop: "6px", marginLeft: "6px" }}>
          <Icon inverted name="close" floated="right" width={1} />
        </Grid.Column>
      </Grid>
      <Grid centered>
        <Container text style={{ paddingTop: "2em", paddingBottom: "2em" }}>
          <Header inverted as="h1">
            Sticky Example
          </Header>

          <Header inverted as="h1">
            Sticky Example
          </Header>
        </Container>
      </Grid>
    </div>
  );
};

export default OnTopNavBar;
