import React, { Component } from "react";
import { Button, Image } from "semantic-ui-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StickyNavBar from "./common/layout/navbar/StickyNavBar";
import OnTopNavBar from "./common/layout/navbar/OnTopNavBar";
import Footer from "./common/layout/footer/Footer";
import { Container } from "semantic-ui-react";
import HomePage from "./home-page/home";
import SubmitWishMainContainer from "./submit-wish-page/SubmitWishMainContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <OnTopNavBar />
          <StickyNavBar />
          <Container style={{ marginTop: "120px" }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/submit-wish"
                component={SubmitWishMainContainer}
              />
            </Switch>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
