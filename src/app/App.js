import React, { Component } from "react";
import { Button, Image } from "semantic-ui-react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "./common/layout/navbar/NavBarContainer";
import OnTopNavBar from "./common/layout/navbar/OnTopNavBar";
import Footer from "./common/layout/footer/Footer";
import { Container } from "semantic-ui-react";
import HomePageContainer from "./home-page/HomeContainer";
import SubmitWishMainContainer from "./submit-wish-page/SubmitWishMainContainer";
import SignUpMainContainer from "./signup-page/SignUpMainContainer";
import AboutComponent from "./common/about/AboutComponent";
import WishDetailsMainContainer from "./wish-details-page/WishDetailsMainContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <OnTopNavBar /> */}
          <NavBarContainer />
          <Container>
            <Switch>
              <Route exact path="/app" component={HomePageContainer} />
              <Route
                exact
                path="/submit-wish"
                component={SubmitWishMainContainer}
              />
              <Route exact path="/signup" component={SignUpMainContainer} />
              <Route exact path="/about" component={AboutComponent} />
              <Route path="/wish/:id" component={WishDetailsMainContainer} />
              <Redirect to="/app" />
            </Switch>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
