import React, { Component } from "react";
import { Button, Image } from "semantic-ui-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBarContainer from "./common/layout/navbar/NavBarContainer";
import OnTopNavBar from "./common/layout/navbar/OnTopNavBar";
import Footer from "./common/layout/footer/Footer";
import { Container } from "semantic-ui-react";
import HomePageContainer from "./home-page/HomeContainer";
import SubmitWishMainContainer from "./submit-wish-page/SubmitWishMainContainer";
import SignUpMainComponent from "./signup-page/SignUpMainComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <OnTopNavBar />
          <NavBarContainer />
          <Container style={{ marginTop: "120px" }}>
            <Switch>
              <Route exact path="/" component={HomePageContainer} />
              <Route
                exact
                path="/submit-wish"
                component={SubmitWishMainContainer}
              />
              <Route exact path="/signup" component={SignUpMainComponent} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
