import React from "react";
import { Container, Header, Button, Grid } from "semantic-ui-react";

const OnTopNavBar = () => {
  return (
    <div
      text
      style={{
        background:
          "linear-gradient(to top, #000000, #1b1a1a, #302d2c, #44423f, #575954)",
        minHeight: "160px",
        opacity: 0.9,
        marginBottom: "14px"
      }}
    >
      <Button />
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
