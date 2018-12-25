import React from "react";
import { Container, Header } from "semantic-ui-react";

const OnTopNavBar = () => {
  return (
    <Container text style={{ marginTop: "2em" }}>
      <Header as="h1">Sticky Example</Header>
      <p>
        This example shows how to use lazy loaded images, a sticky menu, and a
        simple text container
      </p>
    </Container>
  );
};

export default OnTopNavBar;
