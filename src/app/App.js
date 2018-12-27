import React, { Component } from "react";
import { Button, Image } from "semantic-ui-react";
import { BrowserRouter } from "react-router-dom";
import StickyNavBar from "./common/layout/navbar/StickyNavBar";
import OnTopNavBar from "./common/layout/navbar/OnTopNavBar";
import Footer from "./common/layout/footer/Footer";
import { Container, Segment } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <OnTopNavBar />
          <StickyNavBar />
          <Container text style={{ marginTop: "100px" }}>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
