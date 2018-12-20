import React, { Component } from "react";
import { Button, Image } from "semantic-ui-react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./common/layout/navbar/NavBar";
import { Container } from "semantic-ui-react";

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "Users", key: "users" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar leftItems={leftItems} rightItems={rightItems} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
