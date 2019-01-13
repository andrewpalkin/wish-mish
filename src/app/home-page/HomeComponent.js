import _ from "lodash";
import React, { Component } from "react";
import WishComponent from "./WishComponent";
import {
  Image,
  Button,
  Card,
  Grid,
  Icon,
  Header,
  Segment,
  Divider
} from "semantic-ui-react";

export default class HomePage extends Component {
  render() {
    return (
      <>
        {this.props.wishes &&
          this.props.wishes.map(wish => {
            return <WishComponent {...wish} />;
          })}
      </>
    );
  }
}
