import _ from "lodash";
import React, { Component } from "react";
import WishComponent from "./WishComponent";
import { Link } from "react-router-dom";
import dateDiff from "../common/utils/dates/dateDiff";
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
    const currentDate = new Date();
    return (
      <>
        {this.props.wishes &&
          this.props.wishes.map(wish => {
            const diffDate = dateDiff(wish.publishedDate, currentDate);
            return (
              <Link to={"/wish/" + wish.id}>
                <WishComponent {...wish} key={wish.id} diffDate={diffDate} />
                <Divider hidden />
              </Link>
            );
          })}
      </>
    );
  }
}
