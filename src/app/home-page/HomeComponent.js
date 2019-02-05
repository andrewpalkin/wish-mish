import _ from "lodash";
import React, { Component } from "react";
import WishComponent from "./WishComponent";
import { Link } from "react-router-dom";
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
            return (
              <Link to={"/wish/" + wish.id}>
                <WishComponent {...wish} key={wish.id} />
              </Link>
            );
          })}
      </>
    );
  }
}
